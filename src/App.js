import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";

const AppLayout = () => {
  /**
   * Header
   *  - Logo
   *  - Location
   *  - Cart
   *  - Profile
   *
   * Body
   *  - Restaurant Cards
   *    - Image
   *    - Name
   *    - Cuisines
   *    - Distance
   *    - Rating
   *
   * Footer
   *  - Contact Us
   *  - About Us
   *
   */
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(AppLayout());
