import { configureStore } from '@reduxjs/toolkit';
import favouritesSlice from './features/myphotos/favouritesSlice';
import searchSlice from './features/search/searchSlice';

const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    myphotos: favouritesSlice,
  },
});

export default store;