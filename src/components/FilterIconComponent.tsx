import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { setcommonFilteredJobOptions } from "../store/jobListSlice";
import JobListFilterContainer from "./JobListFilterContainer";
const FilterIconComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const jobState = useAppSelector((state) => state.jobList);
  const { tab, commonFilteredJobOptions } = jobState;
  const [isFilterClicked, setIsFilteredClicked] = useState(
    commonFilteredJobOptions[tab]?.isFilterOptionClicked || false
  );

  useEffect(() => {
    setIsFilteredClicked(
      commonFilteredJobOptions[tab]?.isFilterOptionClicked || false
    );
  }, [commonFilteredJobOptions, tab]);

  //Logger
  console.log(
    "Extracted from useAppselectore Initial Render",
    commonFilteredJobOptions,
    tab
  );
  console.log("Dispatch", commonFilteredJobOptions[tab]?.isFilterOptionClicked);
  console.log("useState Value", isFilterClicked);
  //Logger

  const handleFilterClick = () => {
    const newFilterState = !isFilterClicked;
    //cloning the object
    let copyFilteredJobOptions = {
      ...commonFilteredJobOptions,
      [tab]: {
        ...commonFilteredJobOptions[tab],
        isFilterOptionClicked: newFilterState,
      },
    };

    setIsFilteredClicked(newFilterState);
    dispatch(setcommonFilteredJobOptions(copyFilteredJobOptions));

    // console.log("AfterClick", commonFilteredJobOptions);
    // console.log(
    //   "AfterClick - Dispatch",
    //   commonFilteredJobOptions[tab]?.isFilterOptionClicked
    // );
    // console.log("AfterClick - useState Value", isFilterClicked);
  };

  return (
    <div>
      {/* Your component code goes here */}

      {/* <h1>Filter Component</h1> */}
      <button onClick={handleFilterClick}>Filter ICON 🍦</button>

      {isFilterClicked ? <JobListFilterContainer /> : null}
    </div>
  );
};

export default FilterIconComponent;
