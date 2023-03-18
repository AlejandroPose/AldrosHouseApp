import { createSlice } from "@reduxjs/toolkit";

const favouritesSlice = createSlice({
    name: "favouritesSlice",
    initialState: {
        list: JSON.parse( localStorage.getItem('favs') ) || [],
    },
    reducers: {
        updateState: ( state, action ) => {
            state.list = action.payload;
        },
        filterState: ( state, action ) => {
            if ( action.payload === "" ) {
                state.list = JSON.parse( localStorage.getItem('favs') ) || [];
            } else {
                state.list = JSON.parse( localStorage.getItem('favs') ) || [];
                state.list = state.list.filter( photo => {
                    return photo.description.includes(action.payload);
                });
            }
        },
        changeOnlyOne: ( state, action ) => {
            state.list = state.list.map( it => {
                if (it.id === action.payload.photo.id) {
                    it.description = action.payload.inputValue;
                }
                return it;
            });
        },
    }
});

export const { updateState, filterState, changeOnlyOne } = favouritesSlice.actions;
export default favouritesSlice.reducer;