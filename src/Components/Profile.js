import React from "react";

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Profile",
      element: "Profile",
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>Profile</h1>
      </div>
    );
  }
}
