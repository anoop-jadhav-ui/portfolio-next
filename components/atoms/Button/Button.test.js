import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  it("Should Render Button Correctly", () => {
    render(
      <Button customClass="" label="button label" variant="brand" onClick="" />,
    );
    expect(screen.getByText("button label"));
  });
  it("Should call the click handler when button is clicked", () => {
    const clickHandler = jest.fn();
    render(
      <Button
        customClass=""
        label="button label"
        variant="brand"
        onClick={clickHandler}
      />,
    );
    fireEvent.click(screen.getByText("button label"));
    expect(clickHandler).toBeCalled();
  });
});
