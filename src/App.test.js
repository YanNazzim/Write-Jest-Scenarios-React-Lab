import { fireEvent, render, screen } from "@testing-library/react";
import FeedbackForm from "./FeedbackForm";

describe("Feedback Form", () => {
  test("User is able to submit the form if the score is lower than 5 and additional feedback is provided", () => {
    const score = "3";
    const comment = "The pizza crust was too thick";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    // You have to write the rest of the test below to make the assertion pass
    fireEvent.change(screen.getByLabelText(/score/i), { target: { value: score } });
    fireEvent.change(screen.getByLabelText(/comment/i), { target: { value: comment } });
    fireEvent.click(screen.getByText(/submit/i));

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment,
    });
  });

  test("User is able to submit the form if the score is higher than 5, without additional feedback", () => {
    const score = "9";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    // You have to write the rest of the test below to make the assertion pass
    fireEvent.change(screen.getByLabelText(/score/i), { target: { value: score } });
    fireEvent.click(screen.getByText(/submit/i));

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment: "",
    });
  });
});
