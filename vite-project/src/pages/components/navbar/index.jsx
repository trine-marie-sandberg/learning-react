import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Ul, I } from "./style";
import "./style.css";

//ROUTES
const route1 = "home";
const route2 = "page1";
const route3 = "page2";
const route4 = "page3";

//CONPONMENT
export function NavBar() {
    return(
        <Nav>
          <I className="icon fa-brands fa-react"></I>
            <Ul>
                <li>
                  <NavLink to={route1}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={route2}>Page 1</NavLink>
                </li>
                <li>
                  <NavLink to={route3}>Page 2</NavLink>
                </li>
                <li>
                  <NavLink to={route4}>Page 3</NavLink>
                </li>
            </Ul>
        </Nav>
    )
};