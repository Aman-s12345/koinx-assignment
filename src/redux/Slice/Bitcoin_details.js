import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bitcoin :  {},
  }
  

  const Bitcoin_details = createSlice({
    name : "bitcoin",
    initialState,
    reducers : {
        addToBitCoin: (state, action) => {
          const newTask = action.payload
          state.bitcoin = newTask;
        },
    }
})




export const {addToBitCoin } = Bitcoin_details.actions;
export default Bitcoin_details.reducer;

