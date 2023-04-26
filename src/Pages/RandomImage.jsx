import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const RandomImage = () => {
  const [img, setimg] = useState(0);
  const [prompt, setprompt] = useState("");
  const [loader, setloader] = useState(false);
  const [click, setclick] = useState(false);
  const options = {
    method: "GET",
    url: "https://ai_image-database.p.rapidapi.com/images/midjourney",
    headers: {
      "X-RapidAPI-Key": "4e34ecd856msh4f4fcab20c2e052p1c6530jsn59cf3895f091",
      "X-RapidAPI-Host": "ai_image-database.p.rapidapi.com",
    },
  };

  function GenrateImage() {
    setloader(false);
    setclick(true);
    const x = Math.floor(Math.random() * 4814);
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setloader(true);
        setimg([response.data[x].smallImage]);
        setprompt([response.data[x].prompt]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <>
      <div className="containe">
        <div className="rows">
          <div className="col-md-12">
            <div className="main">
              {loader === false && click === false ? (
                <>
                  <div className="tell-them">
                    <h4>
                      Click on{" "}
                      <a className="action" onClick={GenrateImage}>
                        Genrate Image
                      </a>{" "}
                      to get Random Image
                    </h4>
                  </div>
                </>
              ) : loader === false && click === true ? (
                <>
                  <div className="img-loading">
                    <h3>Loading...</h3>
                  </div>
                </>
              ) : (
                <>
                  <div className="random-img-div">
                    <p>{prompt}</p>
                    <div className="img-container">
                      <img src={img} className="random-img" alt={prompt} />
                    </div>
                  </div>
                </>
              )}
              <footer>
                {/* <button
                  className="radom-img-button"
                  onClick={GenrateImage}
                ></button> */}
                <div className="gen">
                <motion.button
                className="random-img-button"
                onClick={GenrateImage}
                  whileHover={{ scale: 1.25 }}
                  whileTap={{ scale: 0.9 }}
                />
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RandomImage;
