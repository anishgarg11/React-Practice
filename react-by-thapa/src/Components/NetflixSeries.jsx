import React from "react";
import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";
import  "./Netflix.css"

const NetflixSeries = () => {
  return (
    <ul className="grid grid-three--cols">
      {seriesData.map((currElem) => (
        <SeriesCard key={currElem.id} dataProps={currElem} />
      ))}
    </ul>
  );
};



export default NetflixSeries;
