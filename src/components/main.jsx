import React, { useState } from "react";
import { ReactComponent as TickIcon } from "../svgs/tick.svg";
import { Data } from "./data";

const Main = () => {
  const [index, setIndex] = useState(0);
  const { name, job, description, img } = Data[index];

  const checkIndex = (newIndex) => {
    if (newIndex > Data.length - 1) {
      return 0;
    }
    if (newIndex < 0) {
      return Data.length - 1;
    }
    return newIndex;
  };

  const prevPerson = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  const nextPerson = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const handleSurprise = () => {
    const randomNumber = Math.floor(Math.random() * Data.length);
    console.log(randomNumber);
    randomNumber !== index ? setIndex(randomNumber) : handleSurprise();
  };

  return (
    <div className="container">
      <h1>Our Reviews</h1>
      <div className="card">
        <div className="img-container">
          <img src={img} alt="" />
          <TickIcon className="tick"/>
        </div>
        <h2 className="name">{name}</h2>
        <p className="job">{job}</p>
        <p className="description">{description}</p>
        <div className="icons">
          <button className="arrow-left" onClick={prevPerson}></button>
          <button className="arrow-right" onClick={nextPerson}></button>
        </div>
        <button className="surprise" onClick={handleSurprise}>
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Main;
