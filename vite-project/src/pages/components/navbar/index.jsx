import React from "react";
import styled from "styled-components";
//import "./navstyle.css";

const Nav =  styled.nav`
  border: solid 1px rgb(158, 250, 163);
  color: rgb(109, 206, 100);
`;
const Li = styled.li`
  padding: 5px;
  text-decoration: ${(active) => (active.isActive ? 'underline' : 'none')}
`;
const Ul = styled.ul`
  display: flex;
  list-style-type: none;
`;

console.log(Nav)
export function NavBar() {
    return(
        <Nav className="nav">
            <Ul>
                <Li isActive = {true}>Home</Li>
                <Li>Page 1</Li>
                <Li>Page 2</Li>
                <Li>Page 3</Li>
            </Ul>
        </Nav>
    )
};