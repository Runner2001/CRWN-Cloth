import { collection, onSnapshot } from "firebase/firestore";
import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CollectionOver from "../../components/collection-overview/collection-overview.com";
import LoadingCom from "../../components/Loading/Loading.com";
import {
  convertCollectionSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import { updateCollections } from "../../redux/shop/shop.action";
import Catagories from "../catagories/catagories.com";

const CollectionOverViewWithLoading = LoadingCom(CollectionOver);
const CatagoriesWithLoading = LoadingCom(Catagories);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromFirebase = null;

  componentDidMount() {
    const { updateCollections } = this.props;

    //Collection Ref of FireStore.
    const collectionsRef = collection(firestore, "collections");

    onSnapshot(collectionsRef, async (snapshot) => {
      const collectionMap = convertCollectionSnapshotToMap(snapshot);
      updateCollections(collectionMap);
      this.setState({ loading: false });
    });
  }

  render() {
    console.log(this.props);
    const { match } = this.props;
    //Match is the auto props of React Router.

    return (
      <div className="shop-page">
        <Route
          exact
          path={match.path}
          render={(props) => (
            <CollectionOverViewWithLoading
              isLoading={this.state.loading}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:cataID`}
          render={(props) => (
            <CatagoriesWithLoading isLoading={this.state.loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) =>
    dispatch(updateCollections(collectionMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
