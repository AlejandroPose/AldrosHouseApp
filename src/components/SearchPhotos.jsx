import { Grid } from "@mui/material";
import { saveAs } from "file-saver";
import { useSelector } from "react-redux";
import { useFavourites } from "../hooks/useFavourites";

export const SearchPhotos = () => {

    const search = useSelector( state => state.search );

    const { isFavourite, onSave } = useFavourites();
  
    const onDownload = ( url ) => {
        saveAs( url );
    };

  return (
    <Grid container gap={5} padding="40px" alignItems="center" justifyContent="center">
        {
          search.data.map( photo => {
            const favourite = isFavourite(photo);
            return (
              <Grid container className="imageContainer" key={ photo.id } justifyContent="center" direction="column" width="200px" padding="10px" border="4px solid #000040">
                <img className="photoIMG" src={ photo.urlThumb } alt={ photo.description } />
                <Grid item className="imageButtons" display="flex" justifyContent="center" alignItems="center" gap="10px" mt="10px">
                  <button className="saveButton" onClick={ () => onSave( photo, favourite ) }>
                    { 
                    favourite ? "UNLIKE" : "LIKE"
                    }
                  </button>
                  <button className="downloadButton" onClick={ () => onDownload( photo.urlFull ) }>DOWNLOAD</button>
                </Grid>
              </Grid>
            )
          })
        }
    </Grid>
  );

};