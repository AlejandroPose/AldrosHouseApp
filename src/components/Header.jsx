import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export const Header = () => {

  return (
    <AppBar>
        <Toolbar>
            <Grid container justifyContent="space-around">
                <Typography variant="h5" mt={ 1 }>ALDROS HOUSE</Typography>
                <Grid container direction="row" justifyContent="space-evenly" alignItems="center" mb={ 1 }>
                    <NavLink to="/" className="navLink">SEARCH</NavLink>
                    <NavLink to="/my-photos" className="navLink">MY PHOTOS</NavLink>
                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
  );

};