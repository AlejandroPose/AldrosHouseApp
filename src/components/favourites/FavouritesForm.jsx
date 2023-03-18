import { Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { filterState } from "../../store/features/myphotos/favouritesSlice";

export const FavouritesForm = ({ title, text }) => {

    const dispatch = useDispatch();

    const onSubmitForm = (event) => {
        event.preventDefault();
        const inputValue = event.target[0].value.trim();
        dispatch( filterState(inputValue) );
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