import { useDispatch, useSelector } from "react-redux";
import { likePhoto, unLikePhoto } from "../store/features/myphotos/favouritesSlice";

export const useFavourites = () => {
  const dispatch = useDispatch();
  const myPhotos = useSelector( state => state.myphotos.list );
    

  const isFavourite = (photo) => {
    return !!myPhotos.find( it => it.id === photo.id );
  };

  const onSave = (photo, favourite) => {
    if ( favourite ) {
      dispatch( unLikePhoto( photo ) );
    } else {
      dispatch( likePhoto( photo ) );
    }
  };

  return {
    isFavourite,
    onSave,
  };

};