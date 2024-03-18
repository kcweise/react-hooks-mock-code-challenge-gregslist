import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const url = "http://localhost:6001/listings"

  useEffect(()=>{
  fetch(url)
    .then (res => res.json())
    .then ( data => setListings(data))
    .catch(error => console.error("Error", error))
  },[])



  return (
    <div className="app">
      <Header />
      <ListingsContainer listings = {listings} />
    </div>
  );
}

export default App;
