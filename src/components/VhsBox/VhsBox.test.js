import { render, screen } from "@testing-library/react";
import VhsBox from "./VhsBox";

test("Should render the VHS Box image", () => {
  render(<VhsBox />);
  const vhsImage = screen.getByRole("img");
  expect(vhsImage).toBeInTheDocument();
});

test("Should render custom styles passed in", () => {
  render(<VhsBox style={{ height: "40px" }} />);
  const vhsImage = screen.getByRole("img");
  expect(vhsImage).toHaveStyle({ height: "40px" });
});
