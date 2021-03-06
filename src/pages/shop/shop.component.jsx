import React,{useEffect} from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";

import { useSelector,useDispatch } from "react-redux";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { selectIsCollectionFetching,selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage= ({match})=> {

  const dispatch=useDispatch();
  const isCollectionFetching = useSelector(selectIsCollectionFetching);
  const isCollectionsLoaded = useSelector(selectIsCollectionsLoaded);

 useEffect(()=>{
  dispatch(fetchCollectionsStartAsync());
 },[dispatch])

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  
}

// const mapDispatchToProps = (dispatch) => ({
//   fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
// });

// const mapStateToProps = createStructuredSelector({
//   isCollectionFetching: selectIsCollectionFetching,
//   isCollectionsLoaded: selectIsCollectionsLoaded
// });

export default ShopPage;
