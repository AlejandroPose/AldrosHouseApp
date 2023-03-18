import { useDispatch, useSelector } from "react-redux";
import { updateState } from "../store/features/myphotos/favouritesSlice";

export const useFavourites = () => {

    const myPhotos = useSelector( state => state.myphotos.list );
    const dispatch = useDispatch();

    const likePhoto = (photo) => {
        let photosLocal = JSON.parse( localStorage.getItem('favs') );
        if ( photosLocal === null ) {
          localStorage.setItem( 'favs', JSON.stringify( [photo] ) );
          //setFavs( [photo] );
          dispatch( updateState( photosLocal ) );
        } else {
          photosLocal = [ ...photosLocal, photo ];
          localStorage.setItem( 'favs', JSON.stringify(photosLocal) );
          //setFavs( photosLocal );
          dispatch( updateState( photosLocal ) );
        }
      };
    
      const unlikePhoto = (photo) => {
        const photosLocal = JSON.parse( localStorage.getItem('favs') );
        const newPhotosLocal = photosLocal.filter( it => it.id !== photo.id );
        localStorage.setItem( 'favs', JSON.stringify(newPhotosLocal) );
        //setFavs( newPhotosLocal );
        dispatch( updateState( newPhotosLocal ) );
      };
    
      const isFavourite = (photo) => {
        return !!myPhotos.find( it => it.id === photo.id );
      };

      const onSave = (photo, favourite) => {
        if ( favourite ) {
          unlikePhoto(photo);
        } else {
          likePhoto(photo);
        }
      };

  return {
    myPhotos,
    likePhoto,
    unlikePhoto,
    isFavourite,
    onSave,
  };

};