import React from 'react'

export const Card = ({data1}) => {
    const {id, imageUrl, name, description, price, Web_url} = data1
    return (
        <li>
          <>
            <img
              src={imageUrl}
              alt=""
              width="30%"
              height="50%"
              style={{
                borderRadius: "10px",
                backgroundColor: "#f0f0f0",
                border: "0.1px solid grey",
                boxShadow: "0px 4px 8px grey",
              }}
            />
            <h3>Name:{name}</h3>
            <p>Description: {description}</p>
            <h2>Price: {price}</h2>
            <a href={Web_url} target="_blank">
              <button>View</button>
            </a>
            <br />
            <br />
            <br />
            <br />
            <br />
          </>
        </li>
      );

}
