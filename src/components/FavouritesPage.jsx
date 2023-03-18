import { Grid, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useFavourites } from "../hooks/useFavourites";
import { Header } from "./Header";
import { saveAs } from "file-saver";
import { FavouritesForm } from "./FavouritesForm";
import { updateState } from "../store/features/myphotos/favouritesSlice";
import { FavouritesPopUp } from "./FavouritesPopUp";

export const FavouritesPage = () => {

  const myphotos = useSelector( state => state.myphotos.list );
  const { isFavourite, onSave } = useFavourites();
  const dispatch = useDispatch();

  const onDownload = ( url ) => {
    saveAs( url );
  };

  const onFilterChange = (event) => {
      const filterValue = event.target.value;
      let newPhotos = myphotos.map( it => {
        return it;
      });
      switch (filterValue) {
        case "0":
          newPhotos = newPhotos.sort(function(a,b) {
            if (a.date > b.date) {
              return 1;
            }
            if (a.date < b.date) {
              return -1;
            }
            return 0;
          });
          dispatch( updateState(newPhotos) );
          break;
        case "1":
          newPhotos = newPhotos.sort(function(a,b) {
            if (a.width < b.width) {
              return 1;
            }
            if (a.width > b.width) {
              return -1;
            }
            return 0;
          });
          dispatch( updateState(newPhotos) );
          break;
        case "2":
          newPhotos = newPhotos.sort(function(a,b) {
            if (a.height < b.height) {
              return 1;
            }
            if (a.height > b.height) {
              return -1;
            }
            return 0;
          });
          dispatch( updateState(newPhotos) );
          break;
        case "3":
          newPhotos = newPhotos.sort(function(a,b) {
            if (a.likes < b.likes) {
              return 1;
            }
            if (a.likes > b.likes) {
              return -1;
            }
            return 0;
          });
          dispatch( updateState(newPhotos) );
          break;
        case "4":
          newPhotos = newPhotos.sort(function(a,b) {
            if (a.date < b.date) {
              return 1;
            }
            if (a.date > b.date) {
              return -1;
            }
            return 0;
          });
          dispatch( updateState(newPhotos) );
          break;
        default:
          console.log('error');
          break;
      }
  };

  return (
    <>
    <Header />
    <Toolbar />
    <FavouritesForm title="MY PHOTOS PAGE:" text="INSERT DESCRIPTION HERE" />
    <hr />
    {
      myphotos.length > 0 ? (
        <>
        <Grid container display="flex" justifyContent="center" alignItems="center" mt="20px">
          <select className="selectFilter" name="photosFilter" id="photosFilter" onChange={ (event) => onFilterChange(event) }>
            <option value="0">SORT BY</option>
            <option value="1">WIDTH</option>
            <option value="2">HEIGHT</option>
            <option value="3">LIKES</option>
            <option value="4">DATE</option>
          </select>
        </Grid>
        <Grid container gap={5} padding="40px" alignItems="center" justifyContent="center">
          {
            myphotos.map( photo => {
                const favourite = isFavourite(photo);
                return (
                  <Grid container className="imageContainer" key={ photo.id } justifyContent="center" direction="column" width="200px" padding="10px" border="4px solid #000040">
                    <img className="photoIMG" src={ photo.urlThumb } alt={ photo.description } />
                    <Grid item className="imageInformation" whiteSpace="nowrap" overflow="hidden" textOverflow="ellipsis" width="172px">
                      <Typography variant="p">Width: { photo.width }</Typography><br />
                      <Typography variant="p">Height: { photo.height }</Typography><br />
                      <Typography variant="p">Likes: { photo.likes }</Typography><br />
                      <Typography variant="p">Date: { photo.date }</Typography><br />
                      <Typography variant="p">Description: { photo.description }</Typography><br />
                      <FavouritesPopUp photo={ photo } />
                    </Grid>
                    <Grid item className="imageButtons" display="flex" justifyContent="center" alignItems="center" gap="10px">
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
    </>
      ) : (
        <p>No favourites photos selected</p>
      )
    }
    </>
  );

};