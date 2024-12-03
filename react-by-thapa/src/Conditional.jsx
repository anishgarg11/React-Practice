import React from 'react'

const Conditional = () => {
    const age = 20
    const username = "Anish"
  return (
    <>
    <p>{age >=18? "Adult": "Minor"}</p>
    <p>{age >=18 && "You can Vote"}</p>
    <p>{username|| "Guest"}</p>
    </>
  )
}

export default Conditional