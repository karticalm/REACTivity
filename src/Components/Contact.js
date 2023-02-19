import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "null",
      url: "null",
      iconUrl: "null",
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/karticalm");
    const json = await data.json();
    console.log(json);
    this.setState({
      userName: json?.login,
      url: json?.html_url,
      iconUrl: json?.avatar_url,
    });
    console.log(this);
  }

  render() {
    return (
      <div>
        <img src={this.state.iconUrl}></img>
        <h1>{this.state.userName}</h1>
        <a href={this.state.url}>Github Profile</a>
      </div>
    );
  }
}

export default Contact;
