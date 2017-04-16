import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';



const NavBarItemsNotLogged = (props) => {
  return (
    <ul className="nav-items">
      <li><StyledNavLink to="/login" >Login</StyledNavLink></li>
      <li><StyledNavLink to="/signup" >Sign up </StyledNavLink></li>
    </ul>
  );
}


const StyledNavLink = styled(NavLink)`
  &:active {
    color: red !important;
  }
`;


export default NavBarItemsNotLogged;
