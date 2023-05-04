import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav =  styled.nav`
  color: rgb(157, 255, 148);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
export const Li = styled.li`
  padding: 5px;
  text-decoration: ${(active) => (active.isActive ? 'underline' : 'none')}
  text-decoration: none !important;
  color: white;
`;
export const Ul = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 5px;
`;
export const I = styled.i`
  font-size: 2.5rem;
  padding: 5px;
`;
export const AnchorTag = styled(NavLink)`
  color: rgb(157, 255, 148);
  text-decoration: none;
`;