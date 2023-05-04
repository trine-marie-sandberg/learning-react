import React from "react";
import styled from "styled-components";
//import "./navstyle.css";

const Nav =  styled.nav`
  border-bottom: solid 1px rgb(158, 250, 163);
  color: rgb(109, 206, 100);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const Li = styled.li`
  padding: 5px;
  text-decoration: ${(active) => (active.isActive ? 'underline' : 'none')}
`;
const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 5px;
`;
const I = styled.i`
  font-size: 2.5rem;
  padding: 5px;
`;

console.log(Nav)
export function NavBar() {
    return(
        <Nav>
          <I className="icon fa-brands fa-react"></I>
            <Ul>
                <Li isActive = {true}>Home</Li>
                <Li>Page 1</Li>
                <Li>Page 2</Li>
                <Li>Page 3</Li>
            </Ul>
        </Nav>
    )
};