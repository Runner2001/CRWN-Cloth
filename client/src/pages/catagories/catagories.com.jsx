import React from "react";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.component";

import "./catagories.style.scss";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Catagories = () => {
  const { cataID } = useParams();
  const collection = useSelector(selectCollection(cataID));
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
// const mapStateToProps = (state, props) => ({
//   collection: selectCollection(props.match.params.cataID)(state),
// });

export default Catagories;
