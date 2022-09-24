import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter: (_state, { payload }) => payload,
  },
});

export default filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
