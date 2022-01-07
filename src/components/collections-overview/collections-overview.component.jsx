import React from "react";
import './collections-overview.styles.scss';
import { useSelector } from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionsForPre } from "../../redux/shop/shop.selectors";

const CollectionsOverview = ()=>{
 
  const collections=useSelector(selectCollectionsForPre);

  return(
    <div className="collections-overview">
        {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
    </div>
)}

// const mapStateToProps=createStructuredSelector({
//     collections: selectCollectionsForPre
//   })

export default CollectionsOverview;