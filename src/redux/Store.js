import { configureStore, combineReducers } from "@reduxjs/toolkit";
import Topcoin from "./Slice/Topcoin";
import Bitcoin_details from "./Slice/Bitcoin_details";
import Performance from "./Slice/Performance";
const rootReducer = combineReducers({
    topcoin: Topcoin,  
    bitcoin_details: Bitcoin_details,
    performance : Performance
  });

const store = configureStore({
    reducer: rootReducer,
});


export default store;