import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Header from "../components/Header";
import { useAppDispatch, useAppSelector } from "../store/hooks";

//Mock Hooks
jest.mock("../store/hooks", () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

describe("Resnder check of screen size", () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    // Mock window size
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 800,
    });

    // Mock Redux dispatch
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);

    // Mock Redux selector if needed
    (useAppSelector as jest.Mock).mockReturnValue({
      // Add your initial state here
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("ResponsiveText should render after button click on small screen", async () => {
    // Arrange
    window.innerWidth = 500;
    render(<Header />); // Render Header instead of ResponsiveText

    // Act
    const button = screen.getByRole("button");
    await userEvent.click(button);

    // Assert
    expect(
      screen.getByText("This text only shows on screens smaller than 600px")
    ).toBeInTheDocument();

    // Verify Redux action was dispatched
    expect(mockDispatch).toHaveBeenCalled();
  });
});
