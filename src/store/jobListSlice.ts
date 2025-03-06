//imports
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ChkBoxOption = {
  value: string;
  label: string;
  isCheck: boolean;
};

export type FilterOptions = {
  locationFilterList: ChkBoxOption[];
  typeFilterList: ChkBoxOption[];
  statusFilterList: ChkBoxOption[];
  workCodeFilterList: ChkBoxOption[];
};

export type CommonFilteredJobOptions = {
  tabName: string;
  isFilterOptionClicked: boolean;
  expandView: boolean;
  filterOptions: FilterOptions;
};

const commonFilterOptions: CommonFilteredJobOptions = {
  tabName: "",
  isFilterOptionClicked: false,
  expandView: false,
  filterOptions: {
    locationFilterList: [
      {
        value: "",
        label: "",
        isCheck: false,
      },
    ],
    typeFilterList: [
      {
        value: "",
        label: "",
        isCheck: false,
      },
    ],
    statusFilterList: [
      {
        value: "",
        label: "",
        isCheck: false,
      },
    ],
    workCodeFilterList: [
      {
        value: "",
        label: "",
        isCheck: false,
      },
    ],
  },
};

type JobListState = {
  selectedJobs: any;
  jobList: any[];
  commonJobList: any[];
  jobListError: string;
  version: string;
  openItems: any;
  currentOpenItem: string;
  isFirstTimeLoad: boolean;
  isJobUpdatesReceived: boolean;
  alertInfo: any;
  popupInfo: any;
  userLocation: string;
  tab: string;
  searchedText: string;
  closedJob: any;
  commonFilteredJobOptions: {
    [key: string]: CommonFilteredJobOptions;
  };
};

const initialState: JobListState = {
  selectedJobs: {},
  jobList: [],
  commonJobList: [],
  jobListError: "",
  version: "0",
  openItems: {},
  currentOpenItem: "",
  isFirstTimeLoad: true,
  isJobUpdatesReceived: false,
  alertInfo: {
    alertType: "warning",
    alertMsg: "",
    showAlert: false,
  },
  popupInfo: {
    popupDialogMsg: "",
    popupDialogTitle: "",
    popupDialogBox: false,
  },
  userLocation: "",
  tab: "JobList",
  searchedText: "",
  closedJob: {
    jobs: [],
    // selDate: getClAssignDate(),
    isLoading: true,
  },
  commonFilteredJobOptions: {
    JobList: commonFilterOptions,
    ClosedJobs: commonFilterOptions,
  },
};

const jobListSlice = createSlice({
  name: "joblist",
  initialState,
  reducers: {
    setTab(state, action: PayloadAction<string>) {
      state.tab = action.payload;
    },
    setcommonFilteredJobOptions: (state, action) => {
      state.commonFilteredJobOptions = action.payload;
    },
  },
});

export const { setTab, setcommonFilteredJobOptions } = jobListSlice.actions;
export default jobListSlice.reducer;
