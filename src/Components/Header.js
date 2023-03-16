import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Title = () => {
  return <h2 className="p-3 text-4xl text-white">ZomUber</h2>;
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const cartItems = useSelector((store) => store?.cart?.items);

  return (
    <div className="bg-green-400 flex text-white justify-between p-3">
      <Title />
      <div>
        <ul className="flex text-xl">
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/cart">Cart ({cartItems?.length})</Link>
          </li>
          <li className="p-4">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="p-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-4">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button
          className="p-4 text-xl bg-white rounded-md text-black"
          onClick={() => setIsLoggedIn(false)}
        >
          Logout
        </button>
      ) : (
        <button
          className="p-4 text-xl bg-white rounded-md text-black"
          onClick={() => setIsLoggedIn(true)}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
