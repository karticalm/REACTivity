import { Link } from "react-router-dom";
import { RESTAURANT_IMG } from "../../constants";
const RestroCard = ({ restaurant }) => {
  const {
    name,
    id,
    cuisines,
    lastMileTravelString,
    cloudinaryImageId,
    avgRating,
  } = restaurant;

  return (
    <div className="restrocard">
      <Link to={"/" + id}>
        <img
          className="card-image"
          src={RESTAURANT_IMG + cloudinaryImageId}
        ></img>
        <h1>{name}</h1>
        <h4>{cuisines.join(", ")}</h4>
        <h3>{lastMileTravelString}</h3>
        <h3>{avgRating}</h3>
      </Link>
    </div>
  );
};

export default RestroCard;
