import { render, screen } from "@testing-library/react";
import App from "./App";
import { moveLogo } from "./utilities";

const bounceBackLeft = {
  x: 539,
  y: 40,
  movingRight: true,
  movingDown: true,
};

const bounceBackRight = {
  x: 1,
  y: 40,
  movingRight: false,
  movingDown: true,
};

const bounceBackUp = {
  x: 147,
  y: 294,
  movingRight: true,
  movingDown: true,
};

const bounceBackDown = {
  x: 147,
  y: 1,
  movingRight: false,
  movingDown: false,
};

test.each([
  [bounceBackLeft, bounceBackLeft.x - 1, bounceBackLeft.y + 1],
  [bounceBackRight, bounceBackRight.x + 1, bounceBackRight.y + 1],
  [bounceBackUp, bounceBackUp.x + 1, bounceBackUp.y - 1],
  [bounceBackDown, bounceBackDown.x - 1, bounceBackDown.y + 1],
])(
  "Should never move the image off the screen",
  (position, expectedXCoordinate, expectedYCoordinate) => {
    const newPosition = moveLogo(position);
    expect(newPosition.x).toBe(expectedXCoordinate);
    expect(newPosition.y).toBe(expectedYCoordinate);
  }
);

test("should have VHS Box on the screen", () => {
  render(<App />);
  const vhsBox = screen.getByRole("img");
  expect(vhsBox).toBeInTheDocument();
});
