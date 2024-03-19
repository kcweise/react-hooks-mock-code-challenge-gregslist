import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
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
    .then (data => setFilteredListings(data))
    .catch(error => console.error("Error", error))
  },[])

 useEffect(() =>{
    setFilteredListings(listings);
  }, [listings]);

console.log(listings)
console.log (filteredListings)

const handleSearch = (query) => {
  setSearchQuery(query);
  const filtered = listings.filter(listing => 
    listing.description.toLowerCase().includes(query.toLowerCase())
  );
  setFilteredListings(filtered);
  console.log(filtered)
};

  return (
    <div className="app">
      <Header onSearch = {handleSearch} searchQuery = {searchQuery}/>
      <ListingsContainer listings = {filteredListings} />
    </div>
  );
}

export default App;
