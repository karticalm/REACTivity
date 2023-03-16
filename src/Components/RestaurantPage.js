import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { RESTAURANT_IMG } from "../Utils/constants";
import useFetchRestaurants from "../Utils/Hooks/useFetchRestaurantsData";
import { addItem } from "../Utils/Store/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantPage = () => {
  const { restaurantId } = useParams();

  const restroData = useFetchRestaurants(restaurantId);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return restroData === null ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div className="p-2 m-2">
        <img
          className="rounded-md"
          src={RESTAURANT_IMG + restroData?.cloudinaryImageId}
        ></img>
        <div className="p-1 m-1">
          <h1>{restroData?.name}</h1>
          <h2>{restroData?.costForTwoMsg}</h2>
          <h2>{restroData?.avgRating} &#9733;</h2>
          <h2>{restroData?.cuisines.join(", ")}</h2>
        </div>
      </div>
      <div className="p-2 m-2">
        <h1 className="text-2xl pb-2">Menu</h1>
        <ul className="text-gray-800">
          {Object.values(restroData?.menu?.items).map((el) => {
            return (
              <div className="flex">
                <li className="text-lg" key={`${el.id}${el.name}`}>
                  {el.name}
                </li>
                <button
                  className="bg-green-200 px-1 text-xs m-1 rounded-md col-end-1"
                  onClick={() => handleAddItem(el)}
                >
                  Add
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantPage;
