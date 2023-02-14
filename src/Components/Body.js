import { useState } from "react";
import { data } from "../data";

const searchRestaurants = function (searchText, restaurants) {
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredRestaurants;
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(data);

  return (
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
            setRestaurants(restaurants);
            const data = searchRestaurants(searchText, restaurants);
            setRestaurants(data);
          }}
        ></input>
      </div>
      <div className="body">
        {restaurants.map((restaurant) => {
          return (
            <RestroCard restaurant={restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

const RestroCard = ({ restaurant }) => {
  const { name, cuisines, lastMileTravelString, cloudinaryImageId, avgRating } =
    restaurant;

  return (
    <div className="restrocard">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      ></img>
      <h1>{name}</h1>
      <h4>{cuisines.join(", ")}</h4>
      <h3>{lastMileTravelString}</h3>
      <h3>{avgRating}</h3>
    </div>
  );
};

export default Body;
