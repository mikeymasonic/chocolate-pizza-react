import React, { Component } from "react";
import Header from "./Header.js";
import Body from "./Body.js";
import Footer from "./Footer.js";
import Heading from "./Heading.js";
import ImageText from "./Image-text.js";
import "./App.css";

const myLogo = "http://www.placekitten.com/100/100";


export default class App extends Component {
  state = {
    username: "Suzie",
    usernameInInput: "",
    counter: 0
  };

  handleInputChange = e => this.setState({ usernameInInput: e.target.value });

  handleButtonClick = () =>
    this.setState({
      username: this.state.usernameInInput
    });

  handleIncrementClick = e =>
    this.setState({
      counter: this.state.counter + 1
    });

  render() {
    return (
      <div className="App"> 
        <Header logoText={'./images/logo-text.PNG'}/>
        <Heading />
        <ImageText />
        <Body authorPicture={'./images/van-pic.png'}/>
        <Footer copyright={'Delicious Copyright 2013 · All Rights Reserved.'}/>
      </div>
    );
  }
}
