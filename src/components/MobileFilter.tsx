import { React, useState } from "react";
import { Box } from "@mui/material";
import { useComponents } from "../useComponents";
import { useAppDispatch, useAppSelector } from "../store/hooks.ts";
import { setCommonJobList } from "../store/features/jobListSlice";
import { filterOptions, jobFilterList } from "../Common/model";
import {
  filterCoTechJobs,
  getCheckedFilterList,
} from "../Common/JobListFilterUtils";
import "../../assets/css/JobListContainer.css";


const JobListFilterMobileContainer: React.FC<any> = ({
  jobFilterList,
  jobCardList,
}) => {
  const { DropdownFlyerComponent } = useComponents();
  const jobState = useAppSelector((state) => state.joblist);
  const { searchedText } = jobState;

  const jobListFilterClassName = {
    menuItemRoot: "joblist-filter-multiselect-root-dropdownFlyer",
    formControlRoot: "joblist-filter-formControl-root-dropdownFlyer",
  };

  const dispatch = useAppDispatch();
  let selectedValue = "";

  const convertToStringArray = (arrayObj: string[] | filterOptions[]) => {
    if (arrayObj.length === 0) {
      return [];
    }
    if (typeof arrayObj[0] === "string") {
      return arrayObj as string[];
    }
    return arrayObj as (filterOptions[]).map((item) => item.value);
  };

  /* Filter Selection callback methods */
  const handleLocationSelections = (selections: string[]) => {
    const selectionsArray = convertToStringArray(selections);
    jobFilterList["locationFilterList"] = getCheckedFilterList(
      jobFilterList?.locationFilterList,
      selectionsArray
    );
    const foundJobCards = filterCoTechJobs(
      jobCardList,
      jobFilterList,
      searchedText
    );
    dispatch(setCommonJobList(foundJobCards));
  };

  const handleTypeSelections = (selections: string[]) => {
    const selectionsArray = convertToStringArray(selections);
    jobFilterList["typeFilterList"] = getCheckedFilterList(
      jobFilterList?.typeFilterList,
      selectionsArray
    );
    const foundJobCards = filterCoTechJobs(
      jobCardList,
      jobFilterList,
      searchedText
    );
    dispatch(setCommonJobList(foundJobCards));
  };

  const handleStatusSelections = (selections: string[]) => {
    const selectionsArray = convertToStringArray(selections);
    jobFilterList["statusFilterList"] = getCheckedFilterList(
      jobFilterList?.statusFilterList,
      selectionsArray
    );
    const foundJobCards = filterCoTechJobs(
      jobCardList,
      jobFilterList,
      searchedText
    );
    dispatch(setCommonJobList(foundJobCards));
  };

  const handleWorkCodeSelections = (selections: string[]) => {
    const selectionsArray = convertToStringArray(selections);
    jobFilterList["workCodeFilterList"] = getCheckedFilterList(
      jobFilterList?.workCodeFilterList,
      selectionsArray
    );
    const foundJobCards = filterCoTechJobs(
      jobCardList,
      jobFilterList,
      searchedText
    );
    dispatch(setCommonJobList(foundJobCards));
  };

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
        gap: 1,
        maxWidth: "380px",
        margin: "0",
        paddingBottom: "12px",
      }}
    >
      {/* Location Filter Dropdown Component */}
      {jobFilterList?.locationFilterList ? (
        <DropdownFlyerComponent
          isMobile={true}
          className={jobListFilterClassName}
          dropdownTitle="Location"
          isMandatory={true}
          options={jobFilterList?.locationFilterList}
          multiSelect={true}
          headerText="Select Location"
          selectedValue={selectedValue}
          handleMultiSelect={handleLocationSelections}
        />
      ) : null}

      {/* Status Filter Dropdown Component */}
      {jobFilterList?.statusFilterList ? (
        <DropdownFlyerComponent
          isMobile={true}
          className={jobListFilterClassName}
          dropdownTitle="Status"
          isMandatory={true}
          options={jobFilterList?.statusFilterList}
          multiSelect={true}
          headerText="Select Status"
          selectedValue={""}
          handleMultiSelect={handleStatusSelections}
        />
      ) : null}

      {/* Type Filter Dropdown Component */}
      {jobFilterList?.typeFilterList ? (
        <DropdownFlyerComponent
          isMobile={true}
          className={jobListFilterClassName}
          dropdownTitle="Type"
          isMandatory={false}
          options={jobFilterList?.typeFilterList}
          multiSelect={true}
          headerText="Select Type"
          selectedValue={""}
          handleMultiSelect={handleTypeSelections}
        />
      ) : null}

      {/* Work Code Filter Dropdown Component */}
      {jobFilterList?.workCodeFilterList ? (
        <DropdownFlyerComponent
          isMobile={true}
          dropdownTitle="Work Code"
          isMandatory={false}
          className={jobListFilterClassName}
          options={jobFilterList?.workCodeFilterList}
          multiSelect={true}
          headerText="Select Work Code"
          selectedValue={""}
          handleMultiSelect={handleWorkCodeSelections}
        />
      ) : null}
    </Box>
  );
};

export default JobListFilterMobileContainer;
