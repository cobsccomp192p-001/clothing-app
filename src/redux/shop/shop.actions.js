import ShopActionTypes from "./shop.types";
import { firestore,collectionSnapshotToObject } from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess=collectionsObject=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionsObject
});

export const fetchCollectionsFaliure=error=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_FALIURE,
    payload:error
})

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    collectionRef.get().then((snapshot) => {
      const collectionsObject = collectionSnapshotToObject(snapshot);
      dispatch(fetchCollectionsSuccess(collectionsObject));
    }).catch(error=>dispatch(fetchCollectionsFaliure(error.message)));
  };
};
