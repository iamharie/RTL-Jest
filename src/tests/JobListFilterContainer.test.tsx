import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import JobListFilterContainer from "../components/JobListFilterContainer";
import { useAppSelector } from "../store/hooks";
import { useIsMobile } from "../utils/useIsMobile";

// Mock the hooks
jest.mock("../store/hooks", () => ({
  useAppSelector: jest.fn(),
}));

jest.mock("../utils/useIsMobile", () => ({
  useIsMobile: jest.fn(),
}));

// Mock the child components
jest.mock("../components/Mobile", () => ({
  __esModule: true,
  default: () => <div data-testid="mobile-component">Mobile View</div>,
}));

jest.mock("../components/Desktop", () => ({
  __esModule: true,
  default: () => <div data-testid="desktop-component">Desktop View</div>,
}));

describe("JobListFilterContainer", () => {
  const mockJobState = {
    tab: "default",
    commonFilteredJobOptions: {
      default: {
        filterOptions: {
          locationFilterList: ["Location 1", "Location 2"],
        },
      },
    },
  };

  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test("renders Mobile component when isMobile is true and filterOptions exist", () => {
    // Arrange
    (useIsMobile as jest.Mock).mockReturnValue({ isMobile: true });
    (useAppSelector as jest.Mock).mockReturnValue(mockJobState);

    // Act
    render(<JobListFilterContainer />);

    // Assert
    expect(screen.getByTestId("mobile-component")).toBeInTheDocument();
    expect(screen.queryByTestId("desktop-component")).not.toBeInTheDocument();
  });

  test("renders Desktop component when isMobile is false", () => {
    // Arrange
    (useIsMobile as jest.Mock).mockReturnValue({ isMobile: false });
    (useAppSelector as jest.Mock).mockReturnValue(mockJobState);

    // Act
    render(<JobListFilterContainer />);

    // Assert
    expect(screen.getByTestId("desktop-component")).toBeInTheDocument();
    expect(screen.queryByTestId("mobile-component")).not.toBeInTheDocument();
  });

  test("renders Desktop component when filterOptions are missing", () => {
    // Arrange
    (useIsMobile as jest.Mock).mockReturnValue({ isMobile: true });
    (useAppSelector as jest.Mock).mockReturnValue({
      tab: "default",
      commonFilteredJobOptions: {
        default: {},
      },
    });

    // Act
    render(<JobListFilterContainer />);

    // Assert
    expect(screen.getByTestId("desktop-component")).toBeInTheDocument();
    expect(screen.queryByTestId("mobile-component")).not.toBeInTheDocument();
  });

  test("renders heading correctly", () => {
    // Arrange
    (useIsMobile as jest.Mock).mockReturnValue({ isMobile: false });
    (useAppSelector as jest.Mock).mockReturnValue(mockJobState);

    // Act
    render(<JobListFilterContainer />);

    // Assert
    expect(screen.getByText("JobListFilterContainer")).toBeInTheDocument();
  });
});
