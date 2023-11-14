import React from "react";
import Salir from "./Salir";
import "./styles/Home.css";
import ScrollToSearchButton from "./Buscar";
import SearchBooks from "./Buscar";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
const Home = (props) => {
    return(
      <div>
        <Menu/>
      </div>
    )
}

export default Home;