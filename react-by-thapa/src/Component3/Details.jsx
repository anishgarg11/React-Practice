import React from "react";

export const Details = ({props}) => {
   const { name, Age, Qualification, Address, E_mail, Bio } = props
  return (
    <>
      <h1>BioData of {name}</h1>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {Age}</p>
      <p><strong>Qualification:</strong> {Qualification}</p>
      <p><strong>Address:</strong> {Address}</p>
      <p><strong>Email:</strong> {E_mail}</p>
      {/* {Bio && Bio.trim() !== "" && <p><strong>Bio:</strong> {Bio}</p>} */}
      {Bio && Bio.trim()!== "" && <p><strong>Bio:</strong> {Bio}</p>}
    </>
  );
};
