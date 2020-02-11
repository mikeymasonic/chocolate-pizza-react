import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return <div>
    <hr id = "footer-line"></hr>
    <div id="logo-icon">
        <img src="./images/logo.png"/>
    </div>

            <div id="copyrightOne">
                {/* Delicious &copy; 2013 · All Rights Reserved. */}
                {this.props.copyright} 
            </div>

                
                <div id="copyrightTwo">
                    Proudly published with Ghost.

                </div>
        </div>
  }
}
