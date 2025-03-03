import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import userEvent from "@testing-library/user-event";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setFilterOption } from "../store/slice";

// mocking the hook from store

jest.mock("../store/hooks", () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

console.log("Mock Store REDUX");

describe("Header Component", () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    // Use the imported hook directly with type assertion
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
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
    expect(mockDispatch).toHaveBeenCalledWith(
      setFilterOption({ filterOption: false })
    );
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

    expect(mockDispatch).toHaveBeenCalledWith(
      setFilterOption({ filterOption: false })
    );
  });
});

describe("Redux actions", () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    // Use the imported hook directly with type assertion
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("dispatches action on button click", async () => {
    render(<Header />);
    const buttonElement = screen.getByRole("button");
    await userEvent.click(buttonElement);

    expect(mockDispatch).toHaveBeenCalledWith(
      setFilterOption({ filterOption: false })
    );
  });
});

// npm test -- Header.test.tsx
