import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";

const Cart = () => {
  const cartItems = useSelector((store) => store?.cart?.items);
  console.log(cartItems);
  return (
    <>
      <h1 className="text-4xl p-2 m-2 text-gray-600">Cart</h1>
      <div className="flex">
        {cartItems.map((item) => {
          return <ItemCard item={item} key={`${item.id}${item.name}`} />;
        })}
      </div>
    </>
  );
};

export default Cart;
