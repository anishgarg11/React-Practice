import React from "react";

const Practices = () => {
  const students = [1];
  return (
    <>
      <h1>Interview Q & A</h1>
      {/* <p>{!students.length && "No Students Found"}</p>
      <p>No. of Students is : {students.length}</p> */}
      <p>
        {students.length === 0
          ? "No Students Found"
          : `No. of students is : ${students.length}`}
      </p>
    </>
  );
};

export default Practices;
