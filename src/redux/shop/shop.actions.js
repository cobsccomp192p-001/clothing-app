import ShopActionTypes from "./shop.types";

export const updateCollections = (collectionsObject)=>(
    {
        type:ShopActionTypes.UPDATE_COLLECTIONS,
        payload:collectionsObject
    }
)