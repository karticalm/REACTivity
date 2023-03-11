import { useState, useEffect } from "react";
import { MENU_URL } from "../constants";

const useFetchRestaurants = (restaurantId) => {
  const [restrodata, setRestrodata] = useState(null);
  useEffect(() => {
    fetchRestaurantData();
  }, []);

  async function fetchRestaurantData() {
    const data = await fetch(MENU_URL + restaurantId);
    const json = await data.json();
    setRestrodata(json.data);
  }

  return restrodata;
};

export default useFetchRestaurants;
