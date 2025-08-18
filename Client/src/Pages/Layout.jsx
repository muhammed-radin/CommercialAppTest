import React, { useEffect, useState } from "react";
import {  Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
    const [search, setSearch] = useState("");

  useEffect(() => {
    if (location.pathname == "/") {
      navigate("/home");
    }
  },[navigate,location]);

  return (
    <div style={{display:'flex',flexDirection:'column'}}>
      <Navbar setSearch={setSearch}/>
      <main style={{ padding: "1rem" }}></main>
      <Outlet  context={{ search }}/>
    </div>
  );
}
