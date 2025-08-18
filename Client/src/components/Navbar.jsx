import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Home from "../Pages/Home";

export default function Navbar({ setSearch }) {
  const searchHandler = (e) => {
    setSearch(e.target.value.toLowerCase());
  };
  return (
    <div className="nav_container">
      <h2>Luxora</h2>
      <input type="search" className="search-bar" onChange={searchHandler} />
      <nav className="menu">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/auth/login">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
