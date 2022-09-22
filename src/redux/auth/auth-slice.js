import { createSlice } from "@reduxjs/toolkit";

import { signup } from "shared/api/auth";


const initialState = {
    user: {},
    isLogin: false,
    token: "",
    loading: false,
    error: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [signup.pending](store) {
            store.loading = true;
            store.error = null;
        },
        [signup.fulfilled](store, {payload}) {
            store.loading = false;
            store.user = payload.user;
            store.token = payload.token;
            store.isLogin = true;
        },
        [signup.rejected](store, { payload }) {
            store.loading = false;
            store.error = payload;
        },
    }
})

export default authSlice.reducer;