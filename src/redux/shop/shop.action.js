import { collection, getDocs } from "firebase/firestore";
import { convertCollectionSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import { shopActionType } from "./shop.type";

export const fetchingStart = () => ({
    type: shopActionType.FATCH_DATA_START,
})

export const fetchingSuccess = data => ({
    type: shopActionType.FATCH_DATA_SUCCESS,
    payload: data
})

export const fetchingFail = data => ({
    type: shopActionType.FATCH_DATA_FAIL,
    payload: data
})

export const FetchingData = () => {
    return (dispatch) => {

        //Collection Ref
        const collectionsRef = collection(firestore, "collections");
        dispatch(fetchingStart());

        //Getting Data from that ref
        getDocs(collectionsRef)
            .then((snapshot) => {
                const collectionMap = convertCollectionSnapshotToMap(snapshot);
                dispatch(fetchingSuccess(collectionMap));
            })
            .catch(error => {
                dispatch(fetchingFail(error.message))
            });

    }
}