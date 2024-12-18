// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "../Imgs/logoSU.png"

const Navbar = () => {
  return (
    <>
      <div className="up_head">
        <div className="conteiner">
          <div className="content">
            <div className="nomer">+996 777 777 777</div>
            <div className="nomer">+996 500 337 705</div>
          </div>
          <div className="content">
            <div className="for_use">
              <a href="#">sing up</a>
            </div>
            <div className="for_use">
              <a href="#">login</a>
            </div>
          </div>
        </div>
      </div>
      <header>
        <div className="header">
          <div className="head_conteiner">
            <div className="logo">
              <a href="/">
              Bridge to the future
              </a>
            </div>
            <div className="menu">
              <div className="menus">
                <Link to="/">Home</Link>
                <Link to="/about">About us</Link>
                <Link to="/contacts">Contacts</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
