import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    performance :  [],
  }
  

  const Performance = createSlice({
    name : "performance",
    initialState,
    reducers : {
        addToPerformance: (state, action) => {
          const newTask = action.payload
          state.performance = newTask;
        },
    }
})




export const {addToPerformance } = Performance.actions;
export default Performance.reducer;

