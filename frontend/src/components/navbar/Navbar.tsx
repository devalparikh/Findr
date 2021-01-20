import React, { useState } from 'react';
import './Navbar.css';
import search from '../../images/search.svg';
import HamburgerButton from './buttons/HamburgerButton';

function Navbar() {

  const [open, setOpen] = useState(false);
  let navBarClass = "Navbar navBarClosed";

  if (open) {
    navBarClass = "Navbar navBarOpen";
  } 

  return (
    <div className={navBarClass}>         
        <span className="logo"> Findr </span>

        <div className="searchBarContainer">
          <input className="searchBar" type="text" id="searchBar" name="searchBar" placeholder="Search"/>
          <img className="searchIcon" src={search} />
        </div>
      
      <div className="navBarButtonGroup">
        <button className="navBarButton selectedNavBarButton">Home</button>
        <button className="navBarButton">Explore</button>
        <button className="navBarButton">Post</button>
        <button className="navBarButton">Account</button>
      </div>

      <HamburgerButton open={open} setOpen={(isOpen: boolean): void => {setOpen(isOpen)}} />
      </div>
  );
}

export default Navbar;