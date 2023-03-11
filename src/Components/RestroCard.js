import { Link } from "react-router-dom";
import { RESTAURANT_IMG } from "../Utils/constants";
import { useContext } from "react";
import premiumMember from "../Utils/Contexts/OneContext";

const RestroCard = ({ restaurant }) => {
  const {
    name,
    id,
    cuisines,
    lastMileTravelString,
    cloudinaryImageId,
    avgRating,
  } = restaurant;

  const premium = useContext(premiumMember);

  return (
    <div className="justify-between w-1/6 p-3 m-3 bg-gray-100 h-96 rounded-md">
      <Link to={"/" + id}>
        <img
          className="rounded-md"
          src={RESTAURANT_IMG + cloudinaryImageId}
        ></img>
        <h1 className="text-xl p-1">{name}</h1>
        <div className="p-1 text-base">
          <h4>{cuisines.join(", ")}</h4>
          <h3 className="py-2">{lastMileTravelString}</h3>
          <h3 className="object-bottom">{avgRating}</h3>
          <h3 className="object-bottom">{premium.message}</h3>
        </div>
      </Link>
    </div>
  );
};

export default RestroCard;
