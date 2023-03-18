import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getPhotos from "./getPhotos";

export const getSearch = createAsyncThunk(
    'search/getPhotos', 
    async (query, { rejectWithValue }) => {
    try {
        const photos = await getPhotos( query );
        return photos;
    } catch (error) {
        rejectWithValue(error.response.data);
    }
});

const searchSlice = createSlice({
    name: "searchSlice",
    initialState: {
        data: [],
        isSuccess: false,
        message: "",
        isLoading: false,
    },
    extraReducers: {
        [getSearch.pending]:(state, { payload }) => {
            state.isLoading = true;
        },
        [getSearch.fulfilled]:(state, { payload }) => {
            state.isLoading = false;
            state.data = payload;
            state.isSuccess = true;
        },
        [getSearch.rejected]:(state, { payload }) => {
            state.message = payload;
            state.isLoading = false;
            state.isSuccess = false;
        },
    },
});

export default searchSlice;