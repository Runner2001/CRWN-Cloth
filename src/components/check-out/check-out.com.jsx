import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectTotal,
} from "../../redux/DropDown/cart.selector";
import CheckOutItems from "../checkout-item/checkout-item.com";
import StripeCheckoutButton from "../stripe-button/stripe-button.com";
import "./check-out.style.scss";

const CheckOut = ({ cartItems, totalValue, addItem, removeItem }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartitem) => (
        <CheckOutItems cartItems={cartitem} key={cartitem.id} />
      ))}
      <div className="total">
        <span>TOTAL: ${totalValue}</span>
      </div>
      <StripeCheckoutButton price={totalValue} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalValue: selectTotal,
});

export default connect(mapStateToProps)(CheckOut);
