import React from "react";
import styled from "styled-components";
import "./navstyle.css";

const Nav =  styled.nav`
  border: solid 1px rgb(158, 250, 163);
  color: rgb(109, 206, 100);
`;
const Li = styled.li`
  padding: 5px;
  text-decoration: ${(active) => (active.isActive ? 'underline' : 'none')}
`;

console.log(Nav)
export function NavBar() {
    return(
        <Nav className="nav">
            <ul className="nav-items">
                <Li isActive = {true} className="nav-item">Home</Li>
                <Li className="nav-item">Page 1</Li>
                <Li className="nav-item">Page 2</Li>
                <Li className="nav-item">Page 3</Li>
            </ul>
        </Nav>
    )
};