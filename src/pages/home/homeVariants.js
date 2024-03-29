export const ContainerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2
    }
  }
}

export const titleVariants = {
  visible: {
    opacity: 1,
    y: 0
  },
  hidden: {
    opacity: 0,
    y: -360
  },
}

export const categoryWrapperVariants = {
  visible: {
    opacity: 1,
    y: 0
  },
  hidden: {
    opacity: 0,
    y: -360
  },
}

export const TitleSearchVariants = {
  down: {
    y: 0
  },
  up: {
    y: -360
  },
}

export const FormVariants = {
  down: {
    y: 0
  },
  up: {
    y: -360
  },
}

export const categoryWrapperSearchVariants = {
  visible: {
    opacity: 1,
    y: -360
  },
  hidden: {
    opacity: 0,
    y: 0
  },
  // exit: {
  //   opacity: 0
  // }
}