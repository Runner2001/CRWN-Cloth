import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ReactComponent as ShoppingIcon } from "../../assets/shoppingbag.svg";
import { selecteCartItemsCount } from "../../redux/DropDown/cart.selector";
import { DropDownAction } from "../../redux/DropDown/dropdown.action";
import "./shop-icons.style.scss";

const CartIcon = ({ toggle, totalQuantity }) => {
  return (
    <div className="cart-icon" onClick={toggle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalQuantity}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  totalQuantity: selecteCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggle: () => dispatch(DropDownAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
