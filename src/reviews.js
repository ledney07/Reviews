import React, { useState } from "react";
import people from "./data/reviewsData";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  //to  next
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const ramdomPerson = () => {
    let ramdomNumber = Math.floor(Math.random() * people.length);
    if (ramdomNumber === index) {
      ramdomNumber = index + 1;
    }
    setIndex(checkNumber(ramdomNumber));
  };

  return (
    <article className="review">
      <div className="img-container" key={id}>
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={ramdomPerson}>
        suprise me
      </button>
    </article>
  );
};

export default Reviews;
