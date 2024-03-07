import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    topcoin :  [],
  }
  

  const TopCoinSlice = createSlice({
    name : "topcoin",
    initialState,
    reducers : {
        addToTopCoin: (state, action) => {
          const newTask = action.payload
          state.topcoin = newTask;
        },
    }
})




export const {addToTopCoin } = TopCoinSlice.actions;
export default TopCoinSlice.reducer;


