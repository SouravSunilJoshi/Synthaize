import React from "react";
import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import "../style/App.css";
import Landing from "./Landing";
import Main from "./Main";
import RandomImage from "./RandomImage";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/" element={<Landing />} />
          <Route path="/Chatty" element={<Main />} />
          <Route path="/PicGen" element={<RandomImage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="custom-link">
            <a className="navbar-brand">SynthAIze</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="custom-link">
                  <a className="nav-link active white" aria-current="page" href="#">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item dropdown ">
                <a
                  className="nav-link dropdown-toggle white"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu ml-auto">
                  <li>
                    <Link to="/Chatty" className="custom-link">
                      <a className="dropdown-item" href="#">
                        Chatty
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to="/PicGen" className="custom-link"><a className="dropdown-item" href="#">
                      PicGen
                    </a></Link>
                  </li>
                </ul>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    </>
  );
};

export default App;
