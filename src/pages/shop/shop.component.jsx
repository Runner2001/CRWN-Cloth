import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CollectionOver from "../../components/collection-overview/collection-overview.com";
import LoadingCom from "../../components/Loading/Loading.com";
import { fetchingStart } from "../../redux/shop/shop.action";
import {
  LoadingSelector,
  selectIsCollectionLoaded,
} from "../../redux/shop/shop.selector";
import Catagories from "../catagories/catagories.com";

const CollectionOverViewWithLoading = LoadingCom(CollectionOver);
const CatagoriesWithLoading = LoadingCom(Catagories);

class ShopPage extends React.Component {
  // state = {
  //   loading: true,
  // };

  // unsubscribeFromFirebase = null;

  componentDidMount() {
    // const { updateCollections } = this.props;
    // //Collection Ref of FireStore.
    // const collectionsRef = collection(firestore, "collections");
    // // Observer Pattern
    // // onSnapshot(collectionsRef, async (snapshot) => {
    // //   const collectionMap = convertCollectionSnapshotToMap(snapshot);
    // //   updateCollections(collectionMap);
    // //   this.setState({ loading: false });
    // // });
    // // Promise Pattern
    // getDocs(collectionsRef).then((snapshot) => {
    //   const collectionMap = convertCollectionSnapshotToMap(snapshot);
    //   updateCollections(collectionMap);
    //   this.setState({ loading: false });
    // });
    // Up Phase Change to async Redux Api request

    const { fetchingStart } = this.props;
    fetchingStart();
  }

  render() {
    const { match, isLoading, isCollectionsLoaded } = this.props;
    //Match is the auto props of React Router.

    return (
      <div className="shop-page">
        <Route
          exact
          path={match.path}
          render={(props) => (
            <CollectionOverViewWithLoading isLoading={isLoading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:cataID`}
          render={(props) => (
            <CatagoriesWithLoading
              isLoading={!isCollectionsLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: LoadingSelector,
  isCollectionsLoaded: selectIsCollectionLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchingStart: () => dispatch(fetchingStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
