import { createSlice } from "@reduxjs/toolkit";

type FilterOption = {
  filterOption: boolean;
};

type JobListSlice = {
  name: string;
  address: string;
  filterOption: FilterOption;
};
