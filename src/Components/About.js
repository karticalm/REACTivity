import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>About Us</h1>
      <h2>Here is some good to know about us!</h2>
      <div>
        Know more about me <Link to="/about/kartik">HERE!</Link>
      </div>
      <Outlet />
    </>
  );
};

export default About;
