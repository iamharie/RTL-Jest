import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FilterOption = {
  filterOption: boolean;
};

type JobListSlice = {
  name: string;
  address: string;
  filterOption: FilterOption;
};

const initialState: JobListSlice = {
  name: "",
  address: "",
  filterOption: {
    filterOption: false,
  },
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setName(state: JobListSlice, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setFilterOption: (state, action: PayloadAction<FilterOption>) => {
      state.filterOption = action.payload;
    },
  },
});

export const { setName, setAddress, setFilterOption } = jobSlice.actions;
export default jobSlice.reducer;
