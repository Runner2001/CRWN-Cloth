import React from "react";
import { Route } from "react-router-dom";
import CollectionOver from "../../components/collection-overview/collection-overview.com";
import Catagories from "../catagories/catagories.com";

const ShopPage = ({ match }) => {
  //Match is the auto props of React Route.
  return (
    <div className="shop-page">
      <Route exact path={match.path} component={CollectionOver} />
      <Route path={`${match.path}/:cataID`} component={Catagories} />
    </div>
  );
};

export default ShopPage;
