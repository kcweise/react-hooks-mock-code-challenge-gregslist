import React, {useEffect, useState} from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings}) {

  
  const [curListings, setCurListings] = useState(listings)

  useEffect(() =>{
    setCurListings(listings);
  }, [listings]);
  

  const handleDelete = (idToDelete) =>{
    const url = `http://localhost:6001/listings/${idToDelete}`;

    fetch(url,{
      method: 'DELETE',
    })
    .then(res =>{
      if(res.ok){
        console.log(`Deleted ${res}`)

        setCurListings(curListings.filter(listing => listing.id !== idToDelete))
        console.log(curListings)
      }  
      else {
       throw new Error (`Failed to Delete`);
      }
    })

    
  }

  return (
    <main>
      <ul className="cards">
        {curListings.map((listing)=>(
        <ListingCard 
        key={listing.id} 
        id={listing.id} 
        description={listing.description}
        image={listing.image}
        location={listing.location}
        handleDelete = {handleDelete}/>
        ))}
               
      </ul>
    </main>
  );
}

export default ListingsContainer;
