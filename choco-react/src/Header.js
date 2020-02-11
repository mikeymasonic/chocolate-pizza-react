import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div id="logo">
            <img src="./images/logo.png" id="logo-pic" />
            <img src={this.props.logoText} />
        </div>

            <div id="media">
                <a href="http://facebook.com"><img src="./images/fb-icon.png" /></a>
                <a href="http://twitter.com"><img src="./images/twit-icon.png" /></a>
                <a href="http://plus.google.com"><img src="./images/gp-icon.png" /></a>
                <a href="http://instagram.com"><img src="./images/insta-icon.png" /></a>
                <a href="http://flickr.com"><img src="./images/flic-icon.png" /></a>
                <a href="http://pinterest.com"><img src="./images/pint-icon.png" /></a>
                <a href="http://rss.com"><img src="./images/rss-icon.png" id="spacer" /></a>
                <a href="mailto:me@delicious.com"><img src="./images/mail-icon.png" /></a>
            </div>

                <div id="horz-bar">
                </div>
      </div>
    );
  }
}
