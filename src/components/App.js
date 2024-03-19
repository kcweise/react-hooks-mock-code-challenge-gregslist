import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const url = "http://localhost:6001/listings"

  useEffect(()=> {
  fetch(url)
    .then (res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Network response was not ok");
    })
    .then (data => setListings(data))
    .catch(error => console.error("Error", error))
  },[])

console.log (listings)

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings = {listings} />
    </div>
  );
}

export default App;
