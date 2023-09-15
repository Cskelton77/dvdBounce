const checkForBoundaryChange = (pos, boundary, existingState) => {
  if (pos + 1 === boundary) {
    return false;
  }
  if (pos - 1 === 0) {
    return true;
  }
  return existingState;
};

export const moveLogo = (position) => {
  const X_BOUNDARY = 640 - 100; // window - image width (540)
  const Y_BOUNDARY = 480 - 185; // window - image height (295)

  const { x, y, movingRight, movingDown } = position;
  const newPosition = {
    movingRight: checkForBoundaryChange(x, X_BOUNDARY, movingRight),
    movingDown: checkForBoundaryChange(y, Y_BOUNDARY, movingDown),
  };
  newPosition.x = newPosition.movingRight ? x + 1 : x - 1;
  newPosition.y = newPosition.movingDown ? y + 1 : y - 1;

  return newPosition;
};
