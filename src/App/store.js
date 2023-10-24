import { configureStore } from "@reduxjs/toolkit";
import flashcardReducer from "./features/flashcardSlice";

const store = configureStore({
  reducer: {
    flashcard: flashcardReducer,
  },
});
export default store;