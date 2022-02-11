import { shopActionType } from "./shop.type";

export const updateCollections = collectionMap => ({
    type: shopActionType.UPADATE_COLLECTION,
    payload: collectionMap
})