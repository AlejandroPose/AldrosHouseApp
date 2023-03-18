import { Route, Routes } from "react-router-dom";
import { FavouritesPage } from "../components/favourites/FavouritesPage";
import { SearchPage } from "../components/search/SearchPage";

export const RoutesApp = () => {

  return (
    <Routes>
        <Route path="/" element={ <SearchPage /> } />
        <Route path="/my-photos" element={ <FavouritesPage /> } />
        <Route path="/*" element={ <SearchPage /> } />
    </Routes>
  );

};