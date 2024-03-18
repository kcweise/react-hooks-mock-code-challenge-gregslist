import React, {useState} from "react";

function ListingCard({ id, description, image, location}) {

const [toggle, setToggle] = useState (false)

const handleClick = () =>setToggle(!toggle);


  return (
    <li className="card" key={id} id= {id}>
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details" onClick = {handleClick}>
        {toggle ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
