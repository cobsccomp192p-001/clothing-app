import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.SHOP_DATA
);

export const selectCollectionsForPre = createSelector(
  [selectShopCollections],
  collections=>Object.keys(collections).map(key=>collections[key])
)

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) =>
    collections[collectionUrlParam]
  );
