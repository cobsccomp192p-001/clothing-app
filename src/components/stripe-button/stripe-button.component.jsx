import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const convertedPrice = price * 100;
  const publishableKey =
    "pk_test_51K9iqqKAsi1drDfu6Jt2FzujZTUEZTqa3d1HurJwHIcvI1qoc4piKNGlVqnQqUyZjmlCEzaCg0zlL5aqlpvnj2V6007ZSbWEKQ";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing App"
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={convertedPrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton