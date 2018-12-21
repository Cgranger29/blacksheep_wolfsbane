import React from "react";
import "./Grid.css";
import Header from "../Header/Header";
import Gif from "../Gif/Gif";
import gif1 from "../../gif/explore3.gif";
import Pic from "../Pic/Pic";
import pic1 from "../../images/together.png";
import pic2 from "../../images/poster-notext2.jpg";
import pic3 from "../../images/characters.jpg";
import header_image from "../../images/main_title.jpeg";
import logo from "../../images/logo.png";

class Grid extends React.Component {
  render() {
    return (
      <div className="grid_wrapper">
        <div className="bg1">
          <Pic pic={logo} cName="logo" />
        </div>
        <div className="one row main_title">
          <Header header_image={header_image} />
        </div>
        <div className="bg2" />
        <div className="two row social_media">
          <a href="#" className="fa fa-twitter" />
          Follow us on twitter (Where to put this)?
        </div>
        <div className="three row about">
          <h2>About The Game</h2>
          <p>
            Deciding to leave his darker days in the big city behind him,
            Sheppard has moved out to the farm to settle down with his girl,
            Betsy.
          </p>
          <br />
          <p>
            But his hopes for a simple life on the straight and narrow path are
            put to the test when demons from his past come for revenge.
          </p>
          <br />
          <p>
            With the help of his friend and Angel, Gabriel, Shep must wage war
            against an army of ravenous wolves, all the while doing battle with
            the darkness in his own heart on a desperate mission to save his
            beloved.
          </p>
          <hr />
        </div>
        <div className="four row ft1">
          <h3>ACTION PLATFORMING </h3>
          <p>
            RUN, WALL JUMP OR SLIDE INTO ACTION WHILER SHOOTING DEADLY ENEMIES!
          </p>
          <hr />
        </div>
        {/* <div className="img1_container">
          <Pic pic={pic2} cName="img1" />
        </div> */}
        <div className="five row ft2">
          <h3>UNIQUE CHARACTERS </h3>
          <p>
            EVERY CHARACTER YOU ENCOUNTER HAS THEIR OWN PERSONALITY RANGING FROM
            GOOFY, FRIENDLY, ANGRY AND ANYTHING IN BETWEEN.
          </p>
          <hr />
        </div>
        {/* <div className="img2_container">
          <Pic pic={pic3} cName="img2" />
        </div> */}
        <div className="six row ft3">
          <h3>HEARTWARMING STORY</h3>
          <p>
            THROUGHOUT THE JOURNEY YOU WILL DEVELOP INTO A STRONG HERO ALONGSIDE
            YOUR ANGEL BUDDY.
          </p>
        </div>
        {/* <div className="img3_container">
          <Pic pic={pic1} cName="img3" />
        </div> */}
        <div className="seven row gif_1">
          <Gif vid={gif1} cName="gif1" />
        </div>

        <div className="eight row gif_2">
          <Gif vid={gif1} cName="gif2" />
        </div>

        <div className="nine row footer"> Footer </div>
      </div>
    );
  }
}
export default Grid;
