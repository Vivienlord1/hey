import React, { Component } from "react";

class Name extends Component {
  constructor(props) {
    super(props);

    this.state = {
      intext: "My name is Vivian",
    };
  }

  toChange = () => {
    this.setState({
      intext: "But My nickname is Ochoko",
    });
  };
  render(props) {
    return (
      <div>
        <h1>{this.state.intext}</h1>
        <button onClick={this.toChange}>clicked</button>
      </div>
    );
  }
}
export default Name;
