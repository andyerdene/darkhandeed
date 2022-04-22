import React from "react";
import "../style/Header.css";
import "../style/style.css";

import logo from "../images/icons/icons8-apple-logo-48.png";

import { Link } from "react-router-dom";
type Props = {};

function Header({}: Props) {
  return (
    <div className="headerBG order-10">
      <div className="contents header">
        <a href="/" id="logo">
          <img src="main_logo.png" alt="" />
          <p>Дархан Дээд Сургууль</p>
        </a>
        <div id="menu">
          <ul>
            <li>
              <Link to="/">Нүүр Хуудас</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/prices">Prices</Link>
            </li>
            <li>
              <Link to="/contact">Contuct Us</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <button>Big Button</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
