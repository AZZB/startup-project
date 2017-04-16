import React from 'react';
import NavBarItemsLogged from './NavBarItemsLogged';
import NavBarItemsNotLogged from './NavBarItemsNotLogged';
import Search from '../search/Search';
import { Link } from 'react-router-dom';
import '../assets/styles/navbar.scss';

const NavBar = (props) => {

  const { toggleDrawer, logoutRequest, logged } = props;

  return (
    <nav className="nav-bar">
      <div className="nav-bar-container">
        <Link to="/" className="logo"></Link>
        <Search />
        <div className="nav-bar-items">
          {(logged)? <NavBarItemsLogged  logoutRequest={logoutRequest} /> : <NavBarItemsNotLogged />}
          <div className="nav-bar-mobile-menu"  onClick={() => toggleDrawer()}>
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
