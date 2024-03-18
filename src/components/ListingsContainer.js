import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings}) {
  return (
    <main>
      <ul className="cards">
      {listings.map((listings)=>(
        <ListingCard 
        id ={listings.id} 
        description={listings.description}
        image = {listings.image}
        location={listings.location}/>
      ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
