import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="container main">
        <div className="row">
          <div className="col-md-6">
            <div className="con">
              <div>
                <h1 className="maintext">SynthAIze</h1>
                <h1 className="submain">An AI which solve your problems</h1>
              </div>
              <div className="buttons">
                <Link to="/Chatty" className="custom-link">
                  <button className="landingbtn">Chatty</button>
                </Link>
                <Link to="/PicGen" className="custom-link">
                  <button className="landingbtn">PicGen</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img className="imagelanding" src="../src/assets/mainimg.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
