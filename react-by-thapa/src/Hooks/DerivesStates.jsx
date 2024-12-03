import React, { useState } from "react";

export default function DerivesStates() {
  const [price, setPrice] = useState(100);
  const [quantity, setQuantity] = useState(0);

  const total = quantity * price;

  const updatePrice = () => {
    setPrice(() => price + 10);
  };

  const updateQuantity = () => {
    setQuantity(() => quantity + 1);
  };
  return (
    <>
      <h1>{price}</h1>
      <h1>{quantity}</h1>
      <h2>{total}</h2>
      <button className="but" onClick={updatePrice}>Price</button>
      <button className="but" onClick={updateQuantity}>Quantity</button>
    </>
  );
}
