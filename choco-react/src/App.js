import React, { Component } from "react";
import Header from "./Header.js";
import Body from "./Body.js";
import Footer from "./Footer.js";
import Heading from "./Heading.js";
import ImageText from "./Image-text.js";
import "./App.css";

export default class App extends Component {

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
