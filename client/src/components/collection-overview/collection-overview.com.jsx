import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { collectionForPreview } from "../../redux/shop/shop.selector";

import CollectionPreview from "../collection-preview/collection-preview";
import "./collection-overview.style.scss";

const CollectionOver = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: collectionForPreview,
});
export default connect(mapStateToProps)(CollectionOver);
