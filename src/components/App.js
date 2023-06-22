import React, { Component } from "react";
import Dropdown from "./Dropdown";
import Home from "./Home";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isShow: false,
      selected: "Not Selected",
      items: ["Yes", "Probably Not", "I don't know"], // items array
    };
  }

  // On hovering on the button, show the drop down items
  handleMouseEnter = () => {
    this.setState({
      isShow: true,
    });
  };

  // On click an option from dropdown list, close the dropdown function and show the selected item
  handleOnClick = (item) => {
    this.setState({
      isShow: false,
      selected: item,
    });
  };

  render() {
    return (
      <div className="app">
        <Home
          isShow={this.state.isShow}
          handleMouseEnter={this.handleMouseEnter}
        />
        {this.state.isShow ? (
          <Dropdown
            items={this.state.items}
            handleOnClick={this.handleOnClick}
          />
        ) : (
          ""
        )}
        <p className="ans-p">Ans: {this.state.selected}</p>
      </div>
    );
  }
}
