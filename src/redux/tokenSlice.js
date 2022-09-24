import { createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'token',
  initialState: '',
  reducers: {
    changeToken: (_state, { payload }) => payload,
  },
});

export default tokenSlice.reducer;
export const { changeToken } = tokenSlice.actions;
