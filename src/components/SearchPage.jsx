import { Toolbar } from "@mui/material";
import { Header } from "./Header";
import { SearchPhotos } from "./SearchPhotos";
import { SearchForm } from "./SearchForm";

export const SearchPage = () => {

  return (
    <>
        <Header />
        <Toolbar />
        <SearchForm title="SEARCH PAGE:" text="INSERT TEXT HERE"/>
        <hr />
        <SearchPhotos />
    </>
  );

};