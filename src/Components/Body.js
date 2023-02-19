import { useState, useEffect } from "react";
import { RESTRO_URL } from "../../constants";
import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";

const searchRestaurants = function (searchText, restaurants) {
  const filteredRestros = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredRestros;
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const apiData = await fetch(RESTRO_URL);
    let json = await apiData.json();
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return filteredRestaurants.length === 0 ? (
    <>
      <div className="Search">
        <input
          type="text"
          placeholder=" Search"
          className="Searchbox"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <input
          type="submit"
          className="SubmitButton"
          onClick={() => {
            const data = searchRestaurants(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        ></input>
      </div>
      <Shimmer />
    </>
  ) : (
    <>
      <div className="Search">
        <input
          type="text"
          placeholder=" Search"
          className="Searchbox"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <input
          type="submit"
          className="SubmitButton"
          onClick={() => {
            const data = searchRestaurants(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        ></input>
      </div>
      <div className="body">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestroCard restaurant={restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
