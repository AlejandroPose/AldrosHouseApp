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
        editDescription: ( state, action ) => {
            const newPhotos = state.list.map( pic => {
                if ( pic.id === action.payload.photo.id ) {
                    pic.description = action.payload.inputValue;
                }
                return pic;
            });
            localStorage.setItem('favs', JSON.stringify( newPhotos ) );
            state.list = newPhotos
        },
        likePhoto: ( state, action ) => {
            const photo = action.payload;
            const photosLocal = state.list
            if ( photosLocal.length === 0 ) {
              localStorage.setItem( 'favs', JSON.stringify( [photo] ) );
              state.list = [photo];
            } else {
              const newPhotosLocal = [ ...photosLocal, photo ];
              localStorage.setItem( 'favs', JSON.stringify(photosLocal) );
              state.list = newPhotosLocal;
            }
        },
        unLikePhoto: ( state, action ) => { 
            const photosLocal = state.list
            const newPhotosLocal = photosLocal.filter( it => it.id !== action.payload.id );
            localStorage.setItem( 'favs', JSON.stringify(newPhotosLocal) );
            state.list = newPhotosLocal;
        }   
    }
});

export const { 
    updateState, 
    filterState, 
    changeOnlyOne, 
    editDescription,
    likePhoto,
    unLikePhoto,
 } = favouritesSlice.actions;
export default favouritesSlice.reducer;