import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Logo from "../../assets/crown.svg";

const StripeCheckoutButton = ({ price }) => {
  const priceforstripe = price * 100;
  const apiKey =
    "pk_test_51KPJNeFhlXfJv6LTEdv4I4TG5abVa3C69EEpOmvizHwqr8aQTGIn7DNN3IDvrKbYMCNL4MPSEPC78aT1I0l4vQ6K00kQS6DkHJ";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your Total is ${price} $`}
      amount={priceforstripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={apiKey}
    />
  );
};

export default StripeCheckoutButton;
