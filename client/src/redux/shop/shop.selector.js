import { createSelector } from "reselect";


const selectShop = (state) => state.shop;

export const selectShopItems = createSelector(
    [selectShop],
    shop => shop.collections
)

export const collectionForPreview = createSelector(
    [selectShopItems],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)

export const selectCollection = collectionUrlParam => createSelector(
    [selectShopItems],
    collections => collections ? collections[collectionUrlParam] : null
)

export const LoadingSelector = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectIsCollectionLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)