import { useState, useEffect } from "react";
import { RESTRO_URL } from "../utils/constants";
import RestroCard from "./RestroCard";
import Shimmer from "./Shimmer";
import OneContext from "../Utils/Contexts/OneContext";

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
      <div className="bg-green-400">
        <input
          type="text"
          placeholder=" Search"
          className="p-2 m-2 rounded-md"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <input
          type="submit"
          value="Go"
          className=" p-2 m-2 bg-white rounded-md"
          onClick={() => {
            const data = searchRestaurants(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        ></input>
      </div>
      <Shimmer />
    </>
  ) : (
    <OneContext.Provider value={{ message: "Swiggy One" }}>
      <div className="bg-green-400">
        <input
          type="text"
          placeholder=" Search"
          className="p-2 m-2 rounded-md"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <input
          type="submit"
          value="Go"
          className=" p-2 m-2 bg-white rounded-md"
          onClick={() => {
            const data = searchRestaurants(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        ></input>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestroCard restaurant={restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </OneContext.Provider>
  );
};

export default Body;
