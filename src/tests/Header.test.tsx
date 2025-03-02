import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import userEvent from "@testing-library/user-event";

describe("Header Component", () => {
  test("Renders 'Online Shopping' Text", () => {
    // Arrange
    render(<Header />);

    // Act:

    // Assert
    const element = screen.getByText("Online Shopping");
    expect(element).toBeInTheDocument();
  });

  test("Renders 'Welcome!' Text if the button was not clicked", () => {
    // Arrange
    render(<Header />);

    // Act:

    // Assert
    const element = screen.getByText("Welcome!");
    expect(element).toBeInTheDocument();
  });

  test("Renders 'Logged Out' Text if the button was clicked", async () => {
    // Arrange
    render(<Header />);

    // Act: Button Click
    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);
    // Assert
    const element = screen.getByText("Logged Out");
    expect(element).toBeInTheDocument();
  });

  test("Not Render 'Welcome!' Text if the button was clicked", async () => {
    //Arrange
    render(<Header />);

    //Act
    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);

    //Assert
    const element = screen.queryByText("Welcome!");
    expect(element).toBeNull;
  });
});

// npm test -- Header.test.tsx
