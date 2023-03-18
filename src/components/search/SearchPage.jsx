import { Toolbar } from "@mui/material";
import { Header } from "../Header";
import { SearchForm } from "./SearchForm";
import { SearchPhotos } from "./SearchPhotos";

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