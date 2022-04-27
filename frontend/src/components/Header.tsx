import React from "react";
import "../style/Header.css";
import "../style/style.css";

import { Link } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { getAuth } from "firebase/auth";

function Header() {
  const auth = getAuth();
  const user = auth.currentUser;
  // const { user, setUser } = useUser();
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
        <div>{user ? user.email : <button>Нэвтрэх</button>}</div>
      </div>
    </div>
  );
}

export default Header;
