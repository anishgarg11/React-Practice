import { useState } from "react";

function StatesQuestion() {
  const [user, setUser] = useState([
    { name: "Anish Garg", age: "24" },
    { name: "Ashish Garg", age: "29" },
    { name: "Avinash", age: "24" },
    { name: "Fardeen", age: "24" },
  ]);

  console.log(user);
  const UserCount = user.length;
  const averageAge = UserCount > 0 
  ? user.reduce((accum, curr) => accum + Number(curr.age), 0) / UserCount
  : 0;  return (
    <>
      <h1>User List</h1>
      <ul>
        {user.map((currElm, index) => {
          return (
            <>
              <li key={index}>
                {currElm.name} - {currElm.age} years old
              </li>
            </>
          );
        })}
      </ul>
      <p>Total Users: {UserCount}</p>
      <p>Average Age: {averageAge}</p>
    </>
  );
}

export default StatesQuestion;
