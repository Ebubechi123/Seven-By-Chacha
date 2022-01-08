import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { BackgroundProvider } from "../../StateMangement/BackgroundColor";
import Nav from "../../Components/Nav/Nav";
import Img from "../../Assets/Images/img2.jpg";
import "./Home.css";
import "./Home.mediaquery.css";
const Home = () => {
  const [color, changeColor] = useContext(BackgroundProvider);
  const ColorHandler = (color) => {
    changeColor(color);
  };

  return (
    <>
      <div className="hero">
        <div className="row">
          <div className="col-1">
            <div className="img">
              <div className="img-box"></div>
              <img src={Img} alt="" />
            </div>
          </div>
          <div className="col-1">
          <div className="img">
              <div className="img-box"></div>
              <img src={Img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
