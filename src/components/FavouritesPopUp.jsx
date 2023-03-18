import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeOnlyOne } from "../store/features/myphotos/favouritesSlice";

export const FavouritesPopUp = ({ photo }) => {

    const [ popUp, setPopUp ] = useState( false );
    const dispatch = useDispatch();

    const togglePopUp = () => {
        setPopUp( !popUp );
    };

    if (popUp) {
        document.body.classList.add('active-popUp');
    } else {
        document.body.classList.remove('active-popUp');
    }

    const onSubmitDescription = (event) => {
        event.preventDefault();
        const inputValue = event.target[0].value;
        const photosLocal = JSON.parse( localStorage.getItem('favs') );
        const newPhotos = photosLocal.map( pic => {
            if ( pic.id === photo.id ) {
                pic.description = inputValue;
            }
            return pic;
        });
        localStorage.setItem('favs', JSON.stringify( newPhotos ) );
        togglePopUp();
        dispatch( changeOnlyOne( {photo, inputValue} ) );
    };

  return (
    <>
    <button className="buttonPopUp" onClick={ togglePopUp }>
        EDIT DESCRIPTION
    </button>

    { popUp && (
    <Grid container className="popUp">
        <Grid item className="overlayPopUp" onClick={ togglePopUp }></Grid>
        <Grid item className="popUpContent">
            <Typography variant="h5">Edit description</Typography>
            <Typography variant="p">{ photo.description }</Typography>
            <form className="formDescription" onSubmit={ onSubmitDescription }>
                <input type="text" placeholder="INSERT DESCRIPTION HERE" />
                <button type="submit">CHANGE</button>
            </form>
            <button className="closePopUp" onClick={ togglePopUp }>X</button>
        </Grid>
    </Grid>
    )}
    </>
  );

};