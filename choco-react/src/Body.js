import React, { Component } from "react";

export default class Body extends Component {
  render() {
    return <div> 
                            <div id="background-list-img">
                                    <div id="left-col">
                                        <ul className="nobull">
                                            <li className="text-adjust">
                                                <div className="checkbox">           
                                                    <input id="Option1" type="checkbox" autocomplete="off"></input>
                                                    <label className="strikethrough">
                                                        1 1/2 cups milk</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="checkbox">           
                                                    <input id="Option2" type="checkbox" autocomplete="off"></input>
                                                    <label className="strikethrough">
                                                        1/2 cup marscarpone</label>
                                                </div>
                                                
                                            </li>
                                            <li>
                                                <div className="checkbox">           
                                                    <input id="Option3" type="checkbox" autocomplete="off"></input>
                                                    <label className="strikethrough">
                                                        1/2 tsp pink salt</label>
                                                </div>
                                                
                                            </li>
                                            <li>
                                                <div className="checkbox">           
                                                    <input id="Option4" type="checkbox" autocomplete="off"></input>
                                                    <label className="strikethrough">
                                                        1lb Black Mission Figs</label>
                                                </div>
                                                
                                            </li>
                                            <li>
                                                <div className="checkbox">           
                                                    <input id="Option5" type="checkbox" autocomplete="off"></input>
                                                    <label className="strikethrough">
                                                        1/2 cup brown sugar</label>
                                                </div>
                                                
                                            </li>
                                            <li>
                                                <div className="checkbox">           
                                                    <input id="Option6" type="checkbox" autocomplete="off"></input>
                                                    <label className="strikethrough">
                                                        2-4 tbsp water</label>
                                                </div>
                                                
                                            </li>

                                        </ul>
                                    </div>

                                        <div id="right-col">
                                            <ul className="nobull">
                                                <li className="text-adjust">
                                                    <div className="checkbox">
                                                    <input id="Option7" type="checkbox" autocomplete="off"></input>
                                                    <label className="strikethrough">
                                                    1 1/2 cups heavy cream</label>
                                                </div>
                                                </li>
                                                <li>
                                                    <div className="checkbox">           
                                                        <input id="Option8" type="checkbox" autocomplete="off"></input>
                                                        <label className="strikethrough">
                                                            1/3 granulated sugar</label>
                                                    </div>
                                                    
                                                </li>
                                                <li>
                                                    <div className="checkbox">           
                                                        <input id="Option9" type="checkbox" autocomplete="off"></input>
                                                        <label className="strikethrough">
                                                            2 egg yolks</label>
                                                    </div>
                                                    
                                                </li>
                                                <li>
                                                    <div className="checkbox">           
                                                        <input id="Option10" type="checkbox" autocomplete="off"></input>
                                                        <label className="strikethrough">
                                                            1 lemon, juiced</label>
                                                    </div>
                                                    
                                                </li>
                                                <li>
                                                    <div className="checkbox">           
                                                        <input id="Option11" type="checkbox" autocomplete="off"></input>
                                                        <label className="strikethrough">
                                                            2 tbsp butter</label>
                                                    </div>
                                                    
                                                </li>
                                                <li>
                                                    <div className="checkbox">           
                                                        <input id="Option12" type="checkbox" autocomplete="off"></input>
                                                        <label className="strikethrough">
                                                            1 cup honey roasted pecans, roughly chopped</label>
                                                    </div>
                                                    
                                                </li>

                                            </ul>
                                        </div>
                            </div>
                        


<div id="horz-bar">
</div>

<div id="writer-bio">

<div id="writer-bio-pic">
    <img src = {this.props.authorPicture} alt="Vanessa Stevenson Headshot" />
</div>

<div id="writer-bio-name">
    Vanessa Stevenson
</div>

<div id="writer-bio-text">
    Food enthusiast, photography fan.  Add a pinch of raw foodism and that's pretty much who I am.
</div>

<div id="share-recipe">
    <a href="#">SHARE RECIPE</a>
</div>


</div></div>;
  }
}
