import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_IMG, MENU_URL } from "../../constants";

const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const [restroData, setRestrodata] = useState(null);
  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async function () {
    const data = await fetch(MENU_URL + restaurantId);
    const json = await data.json();
    setRestrodata(json.data);
  };

  return restroData === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <img src={RESTAURANT_IMG + restroData?.cloudinaryImageId}></img>
        <h1>{restroData?.name}</h1>
        <h2>{restroData?.costForTwoMsg}</h2>
        <h2>{restroData?.avgRating} &#9733;</h2>
        <h2>{restroData?.cuisines.join(", ")}</h2>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restroData?.menu?.items).map((el) => {
            return <li key={el.id}>{el.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantPage;
