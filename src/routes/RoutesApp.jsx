import { Route, Routes } from "react-router-dom";
import { FavouritesPage } from "../components/FavouritesPage";
import { SearchPage } from "../components/SearchPage";

export const RoutesApp = () => {

  return (
    <Routes>
        <Route path="/AldrosHouseApp/" element={ <SearchPage /> } />
        <Route path="/AldrosHouseApp/my-photos" element={ <FavouritesPage /> } />
        <Route path="/AldrosHouseApp/*" element={ <SearchPage /> } />
    </Routes>
  );

};