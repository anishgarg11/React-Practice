import React from "react";
import cartData from "../api/cartData.json"
import { Card } from "./Card";
const Mobile = () => {
  return (
    <ul style={{ listStyleType: "none" }}>
      {cartData.map((currEl) => (
        <Card key={currEl.id} data1={currEl} />
      ))}
    </ul>
  );
};
export default Mobile;
