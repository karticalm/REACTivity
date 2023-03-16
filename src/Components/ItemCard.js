import { RESTAURANT_IMG } from "../Utils/constants";

const ItemCard = ({ item }) => {
  const { name, cloudinaryImageId, description, price } = item;

  return (
    <div className="justify-between w-1/6 p-3 m-3 bg-gray-100 h-96 rounded-md">
      <img
        className="rounded-md"
        src={RESTAURANT_IMG + cloudinaryImageId}
      ></img>
      <h1 className="text-xl p-1">{name}</h1>
      <h1 className="text-xl p-1">Rs. {price / 100}</h1>
      <div className="p-1 text-base">
        <h3 className="text-base">{description}</h3>
      </div>
    </div>
  );
};

export default ItemCard;
