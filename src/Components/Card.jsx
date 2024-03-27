import React from "react";
import "./Card.css"
export default function Card({e}) {
  return (
    <div className="Card" key={e.id}>
      <img src={e.images[0]} alt={e.name} />
      <h3 className="ProductTitle">{e.title}</h3>
      <p className="ProductDesc">{e.description}</p>
      <p className="Price">Price: {e.price}$</p>
      <div className="Btns">
        <button>Add To Cart</button>
        <button>Buy Now</button>
      </div>
    </div>
  );
}
