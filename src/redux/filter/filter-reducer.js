import changeFilter from "./filter-actions";
import { createReducer } from "@reduxjs/toolkit";


const filterReducer = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});


export default filterReducer;