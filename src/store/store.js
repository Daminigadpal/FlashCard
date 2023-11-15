import { configureStore } from "@reduxjs/toolkit";
import flashcardReducer from "../App/features/flashcardSlice";

const store = configureStore({
  reducer: flashcardReducer,
 
});
export default store;