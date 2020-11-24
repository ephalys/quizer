import React, { useState } from 'react'
import AllThemes from 'assets/styles/themes';
import { useDispatch } from 'react-redux';
import { applyTheme } from 'actions/theme'
import { StyledThemeSelector, Drop } from './themeSelectorStyles'

const ThemeSelector = () => {
    const dispatch = useDispatch();
    const [themeIndex, setThemeIndex] = useState(0);

    const changeTheme = theme => {
        dispatch(applyTheme(theme))
    }

    const handleClick = () => {
        const newThemeIndex = (themeIndex + 1 >= AllThemes.length ? 0 : themeIndex + 1)
        changeTheme(AllThemes[newThemeIndex])
        setThemeIndex(newThemeIndex)
    }

    return (
        <StyledThemeSelector>
            <Drop onClick={handleClick} />
        </StyledThemeSelector>
    );
}

export default ThemeSelector;