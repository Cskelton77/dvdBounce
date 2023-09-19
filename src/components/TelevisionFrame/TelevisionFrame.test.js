import { render, screen } from "@testing-library/react";
import TelevisionFrame from "./TelevisionFrame";

test("Should render the child component", () => {
  render(
    <TelevisionFrame>
      <span>Test Child Component</span>
    </TelevisionFrame>
  );
  const childComponent = screen.getByText(/test child component/i);
  expect(childComponent).toBeInTheDocument();
});
