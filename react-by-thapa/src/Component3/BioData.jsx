import React from "react";
import myData from "../api/myData.json";
import { Details } from "./Details";
const BioData = () => {
  return (
    <>
      {myData.map((curr1) => (
        <Details props={curr1} />
      ))}
    </>
  );
};

export default BioData;
