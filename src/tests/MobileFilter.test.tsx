import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useAppDispatch, useAppSelector } from "../store/hooks.ts";
import { setCommonJobList } from "../store/features/jobListSlice";
import { useComponents } from "../useComponents";
import JobListFilterMobileContainer from "../components/JobListFilterMobileContainer";

// Mock dependencies
jest.mock("../store/hooks", () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
}));

jest.mock("../store/features/jobListSlice", () => ({
  setCommonJobList: jest.fn(),
}));

jest.mock("../useComponents", () => ({
  useComponents: () => ({
    DropdownFlyerComponent: ({ dropdownTitle, handleMultiSelect }) => (
      <button onClick={() => handleMultiSelect([`${dropdownTitle} Selection`])}>
        {dropdownTitle} Dropdown
      </button>
    ),
  }),
}));

describe("JobListFilterMobileContainer", () => {
  let dispatchMock;

  beforeEach(() => {
    dispatchMock = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(dispatchMock);
    (useAppSelector as jest.Mock).mockReturnValue({
      searchedText: "test search",
    });

    // Mock mobile view
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: 500,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const mockJobFilterList = {
    locationFilterList: [{ value: "New York", label: "New York" }],
    statusFilterList: [{ value: "Active", label: "Active" }],
    typeFilterList: [{ value: "Full-Time", label: "Full-Time" }],
    workCodeFilterList: [{ value: "Remote", label: "Remote" }],
  };

  const mockJobCardList = [
    { id: 1, title: "Job 1" },
    { id: 2, title: "Job 2" },
  ];

  it("renders all dropdowns when width is below 600px", () => {
    render(
      <JobListFilterMobileContainer
        jobFilterList={mockJobFilterList}
        jobCardList={mockJobCardList}
      />
    );

    expect(screen.getByText("Location Dropdown")).toBeInTheDocument();
    expect(screen.getByText("Status Dropdown")).toBeInTheDocument();
    expect(screen.getByText("Type Dropdown")).toBeInTheDocument();
    expect(screen.getByText("Work Code Dropdown")).toBeInTheDocument();
  });

  it("does not render component if window width is greater than 600px", () => {
    window.innerWidth = 700;
    render(
      <JobListFilterMobileContainer
        jobFilterList={mockJobFilterList}
        jobCardList={mockJobCardList}
      />
    );
    expect(screen.queryByText("Location Dropdown")).not.toBeInTheDocument();
  });

  it("calls dispatch with filtered jobs when a selection is made", () => {
    render(
      <JobListFilterMobileContainer
        jobFilterList={mockJobFilterList}
        jobCardList={mockJobCardList}
      />
    );

    fireEvent.click(screen.getByText("Location Dropdown"));

    expect(dispatchMock).toHaveBeenCalledWith(expect.any(Function));
  });
});
