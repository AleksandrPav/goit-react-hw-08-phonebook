import { createAsyncThunk } from "@reduxjs/toolkit";

import * as authAPI from "shared/api/auth";

export const signup = createAsyncThunk(
  "auth/signup",
  async (data, { rejectWithValue }) => {
    try {
      const response = await authAPI.signup(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);