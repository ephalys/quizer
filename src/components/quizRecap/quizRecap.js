import React, { useState, useEffect, useRef } from "react";
import {
    QuizRecapTitle,
    StyledQuizRecap,
    QuizRecapContainer,
    QuizRecapScore,
    FavButton,
    FavoriteContainer
} from "./quizRecapStyles";
import { useDispatch } from "react-redux";
import { updateScoreTable } from "actions/score";
import { favoriteCategories } from "actions/category";
import { useSelector } from "react-redux";
import FavoriteBorder from "assets/icons/favorite_border.svg";
import Favorite from "assets/icons/favorite.svg";
import history from "config/history";

const QuizRecap = (props) => {
    const goodAnswerCountRef = useRef(null)
    const { category, questCount, goodAnswerCount } = props.data;
    const [congrats, setCongrats] = useState();
    const dispatch = useDispatch();

    let categoryObject = JSON.parse(localStorage.getItem("category"));
    let favoriteList = useSelector((state) => state.category.FavoritesCategories);
    const index = favoriteList.findIndex((i) => i.id === categoryObject.id);

    const handleRedirectHome = () => {
        history.push("/");
    };

    useEffect(() => {
        if (!goodAnswerCountRef.current) {
            goodAnswerCountRef.current = goodAnswerCount
        }
    }, [goodAnswerCount])

    useEffect(() => {
        if (!congrats) {
            let tempCongrats;
            if (0 <= goodAnswerCountRef.current && goodAnswerCountRef.current <= 3) {
                tempCongrats = "Unlucky !";
            } else if (4 <= goodAnswerCountRef.current && goodAnswerCountRef.current <= 6) {
                tempCongrats = "Keep goin' !";
            } else if (7 <= goodAnswerCountRef.current && goodAnswerCountRef.current <= 9) {
                tempCongrats = "Nice !";
            } else if (goodAnswerCountRef.current && goodAnswerCountRef.current === 10) {
                tempCongrats = "Incredible !";
            }
            setCongrats(tempCongrats);
            let ScoreRecap = {
                goodAnswerCount: goodAnswerCountRef.current,
                questCount: questCount,
                category: category,
            };
            dispatch(updateScoreTable(ScoreRecap));
        }
    }, [goodAnswerCountRef.current]);


    return (
        <StyledQuizRecap
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
                hidden: {
                    opacity: 0,
                },
                visible: {
                    opacity: 1,
                },
            }}
        >
            <QuizRecapTitle
                onClick={handleRedirectHome}>Quizer</QuizRecapTitle>
            <QuizRecapContainer>
                <QuizRecapScore
                    exit="hidden">
                    {goodAnswerCountRef.current} / {questCount}
                </QuizRecapScore>
                <h2>{congrats}</h2>
                <FavoriteContainer>
                    <p>
                        If you like this category, you can save it for further games.
                    </p>
                    <FavButton
                        onClick={() => dispatch(favoriteCategories(categoryObject))}>
                        {index === -1 ? <img src={FavoriteBorder} /> : <img src={Favorite} />}
                    </FavButton>
                </FavoriteContainer>
            </QuizRecapContainer>
        </StyledQuizRecap>
    );
};

export default QuizRecap;
