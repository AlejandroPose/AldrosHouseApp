import { Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { editDescription } from "../../store/features/myphotos/favouritesSlice";

export const FavouritesPopUp = ({ isVisible, photo, closeModal }) => {

    const dispatch = useDispatch();

    const onSubmitDescription = (event) => {
        event.preventDefault();
        const inputValue = event.target[0].value;
        closeModal();
        dispatch( editDescription( {photo, inputValue} ) );
    };

    
    if (isVisible) {
        document.body.classList.add('active-popUp');
    } else {
        document.body.classList.remove('active-popUp');
    }

    if (!isVisible) {
        return null;
    }

  return (
    <Grid container className="popUp">
        <Grid item className="overlayPopUp" onClick={ closeModal }></Grid>
        <Grid item className="popUpContent">
            <Typography variant="h5">Edit description</Typography>
            <Typography variant="p">{ photo.description }</Typography>
            <form className="formDescription" onSubmit={ onSubmitDescription }>
                <input type="text" placeholder="INSERT DESCRIPTION HERE" />
                <button type="submit">CHANGE</button>
            </form>
            <button className="closePopUp" onClick={ closeModal }>X</button>
        </Grid>
    </Grid>
  );

};