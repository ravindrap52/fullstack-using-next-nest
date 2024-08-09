import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInitialState } from "@/interfaces/initialState.interface";
import { IDealers } from "@/interfaces/dealers.interface";
import { IDealerDetails } from "@/interfaces/dealerDetails.interface";

const initialState: IInitialState = {
  dealers: [],
  filteredDealers: [],
  dealereDetails: [],
};

const dealerSlice = createSlice({
  name: "dealer",
  initialState,
  reducers: {
    setDealers: (state, action: PayloadAction<IDealers[]>) => {
      state.dealers = action.payload;
    },
    setFilteredDealers: (state, action: PayloadAction<IDealers[]>) => {
      state.filteredDealers = action.payload;
    },
    setDealerDetails: (state, action: PayloadAction<IDealerDetails[]>) => {
      state.dealereDetails = action.payload;
    },
  },
});

export const { setFilteredDealers, setDealers, setDealerDetails } = dealerSlice.actions;
export default dealerSlice.reducer;
