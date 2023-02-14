const Title = () => {
  return <h2 className="title">ZomUber</h2>;
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="location">Location</div>
      <div className="headerMenu">
        <ul>
          <li>Cart</li>
          <li>Profile</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
