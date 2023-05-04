import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { AnchorTag, Nav, Li, Ul, I } from "./style";

//ROUTES (Input routes from App.jsx here)
const route1 = "home";
const route2 = "page1";

//CONPONMENT
export function NavBar() {
    return(
        <Nav>
          <I className="icon fa-brands fa-react"></I>
            <Ul>
                <Li isActive = {false}>
                  <AnchorTag to={route1}>Home</AnchorTag>
                </Li>
                <Li isActive = {false}>
                  <AnchorTag to={route2}>Page 1</AnchorTag>
                </Li>
                <Li isActive = {false}>Page 2</Li>
                <Li isActive = {false}>Page 3</Li>
            </Ul>
        </Nav>
    )
};