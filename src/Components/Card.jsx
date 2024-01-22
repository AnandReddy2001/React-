import React from "react";
import "./Card.css";
import w1 from "../Assets/w1.jpg";
import w2 from "../Assets/w2.jpg";
import w3 from "../Assets/w3.jpg";
import w4 from "../Assets/w4.jpg";
const data = [
  {
    icon: w1,
    title: "card1",
    description: "lkjhygf",
  },
  {
    icon: w2,
    title: "card1",
    description: "lkjhygf",
  },
  {
    icon: w3,
    title: "card1",
    description: "lkjhygf",
  },
  {
    icon: w4,
    title: "card1",
    description: "lkjhygf",
  },
];
const Card = () => {
  return (
    <>
      <div className="card-headline">
        <h1>CARDS</h1>
      </div>
      <div className="cards">
        {data.map((item) => (
          <div class="card">
            <div class="card-image">
              <img src={item.icon} alt="" />
            </div>
            <div class="card-content">
              <h2 class="card-title">{item?.title}</h2>
              <p class="card-text">{item?.description}</p>
              <button>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
