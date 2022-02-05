import React from "react";
import { connect } from "react-redux";
import {
  AddItems,
  DeleteItem,
  RemoveItem,
} from "../../redux/DropDown/dropdown.action";
import "./checkout-item.style.scss";

const CheckOutItems = ({ cartItems, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItems;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="Item Image" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItems)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItems)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => clearItem(cartItems)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(DeleteItem(item)),
  addItem: (item) => dispatch(AddItems(item)),
  removeItem: (item) => dispatch(RemoveItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckOutItems);
