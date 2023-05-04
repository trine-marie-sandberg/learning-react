import React from "react";
import styled from "styled-components";

//STYLING
const Nav =  styled.nav`
  color: rgb(157, 255, 148);
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

//CONPONMENT
console.log(Nav)
export function NavBar() {
    return(
        <Nav>
          <I className="icon fa-brands fa-react"></I>
            <Ul>
                <Li isActive = {false}>Home</Li>
                <Li isActive = {false}>Page 2</Li>
                <Li isActive = {false}>Page 3</Li>
                <Li isActive = {false}>Page 4</Li>
            </Ul>
        </Nav>
    )
};