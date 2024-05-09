import { render, fireEvent, screen } from "@testing-library/react";
import StringCalculator from "./StringCalculator";

test("empty input returns 0", () => {
  render(<StringCalculator />);
  const input = screen.getByLabelText("Input");
  const calculateButton = screen.getByText("Calculate");

  fireEvent.change(input, { target: { value: "" } });
  fireEvent.click(calculateButton);

  expect(screen.getByText("Result: 0")).toBeInTheDocument();
});

test("single number input returns that number", () => {
  render(<StringCalculator />);
  const input = screen.getByLabelText("Input");
  const calculateButton = screen.getByText("Calculate");

  fireEvent.change(input, { target: { value: "5" } });
  fireEvent.click(calculateButton);

  expect(screen.getByText("Result: 5")).toBeInTheDocument();
});

test("two numbers input returns their sum", () => {
  render(<StringCalculator />);
  const input = screen.getByLabelText("Input");
  const calculateButton = screen.getByText("Calculate");

  fireEvent.change(input, { target: { value: "3,7" } });
  fireEvent.click(calculateButton);

  expect(screen.getByText("Result: 10")).toBeInTheDocument();
});
