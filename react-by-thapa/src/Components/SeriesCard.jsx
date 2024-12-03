import React from "react";
import styles from "./Netflix.module.css"
export const SeriesCard = ({ dataProps }) => {
  // Destructuring the Components
  const { img_url, name, rating, description, genre, cast, watch_url } =
    dataProps;

  const btn_style = {
    padding: "1.2rem 2.4rem",
    border: "none",
    backgroundColor: `${rating >= 8? "#77dd77": "#e47c7c"}`,
    color: "#fff",
    fontSize: "1.6rem",
    fontWeight:"bold",
    cursor:"pointer"
  };

  const font_Size = {
    fontSize: "15px",
  };

  const ratingClass = rating >= 8 ? styles.super_hit : styles.average;


  return (
    <li className={styles.card}>
      <>
        <img src={img_url} width="40%" height="30%" />
        <div className= {styles["card-content"]}>
          <h2>Name: {name}</h2>
          <h3>
            Rating: <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
          </h3>
          <p className="text-3xl font-bold underline">Summary: {description}</p>
          <p>Genre: {genre.join(", ")}</p>
          <p>Cast: {cast.join(", ")}</p>

          <a href={watch_url} target="_blank">
            <button style={btn_style}>
            Watch Now
            </button>
          </a>
        </div>

        <br />
        <br />
        <br />
      </>
    </li>
  );
};

