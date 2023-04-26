import React, { useEffect, useState } from "react";
import axios from "axios";
import {motion} from 'framer-motion';

const Main = () => {
  const [prompts, setprompts] = useState("");
  // const [saveprompt, setsaveprompt] = useState([]);
  const [ans, setans] = useState("");
  const [display, setdisplay] = useState([]);
  const [loader, setloader] = useState(false);
  const [click, setclick] = useState(false);

  const options = {
    method: "POST",
    url: "https://chatgpt-gpt-3-5.p.rapidapi.com/ask",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "4e34ecd856msh4f4fcab20c2e052p1c6530jsn59cf3895f091",
      "X-RapidAPI-Host": "chatgpt-gpt-3-5.p.rapidapi.com",
    },
    data: { query: prompts },
  };

  const submithandler = (e) => {
    setloader(true);
    setclick(true);
    e.preventDefault();
    axios
      .request(options)
      .then(function (response) {
        const data = response.data.response;
        setans(data);
        setdisplay([...display, prompts, data]);
        setloader(false);
      })
      .catch(function (error) {
        console.error(error);
      });
    setprompts("");
  };

  const inputhandler = (e) => {
    const data = e.target.value;
    setprompts(data);
  };

  return (
    <>
      <div className="containe">
        <div className="rows">
          <div className="col-md-12">
            <div className="main">
              <div className="content">
                {display.map((item, index) => {
                  return (
                    <>
                    <div className="output" key={item}>
                              {index % 2 == 0 ? (
                                <>
                                  <h3 className="odd">Question: {item}</h3>
                                </>
                              ) : (
                                <>
                                  <h3 className="even">Solution: {item}</h3>
                                </>
                              )}
                            </div>
                    </>
                  );
                })}
              </div>

              <div className="ask-footer">
                <form onSubmit={submithandler}>
                  <input
                    placeholder="Enter Question..."
                    type="text"
                    value={prompts}
                    onChange={inputhandler}
                  />
                  <button className="ask">Ask</button>
                  {/* <button className="add">+</button> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
