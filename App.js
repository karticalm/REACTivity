import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <a href="" className="logo">
        <img src="https://www.w3schools.com/images/lamp.jpg" />
      </a>
      <input type="text" className="searchBar" placeholder="Search"></input>
      <a href="" className="profile">
        <img
          src="https://www.freeiconspng.com/uploads/profile-icon-person-user-19.png"
          width="28"
        />
      </a>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Header());
