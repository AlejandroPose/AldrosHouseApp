import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getSearch } from "../store/features/search/searchSlice";

export const SearchForm = ({ title, text }) => {

    const [query, setQuery] = useState( '' );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getSearch(query) );
    }, [query]);

    const onSubmitForm = (event) => {
        event.preventDefault();
        const inputValue = event.target[0].value;
        if ( inputValue.trim() !== query ) {
          setQuery(inputValue);
        }
    };

  return (
    <Grid container alignItems="center" justifyContent="center" direction="column">
          <Typography mt={ 3 } mb={ 1 } variant="h6" color="#000040">{ title }</Typography>
          <Grid item className="gridForm">
            <form onSubmit={ onSubmitForm } className="formSearch">
              <input type="text" placeholder={ text } className="inputTextForm" />
              <input type="submit" value="SEARCH" className="inputSubmitForm" />
            </form>
          </Grid>
    </Grid>
  );

};