import React, { useState, useEffect } from 'react';
import './Navbar.css';
import search from '../../images/search.svg';
import HamburgerButton from './buttons/HamburgerButton';
import { NavLink } from "react-router-dom"

import { useHistory } from 'react-router-dom';

function Navbar() {


  const [open, setOpen] = useState(false);
  const [screenSize, SetScreenSize] = useState(window.innerWidth);

  const history = useHistory();

  useEffect(() => {
    const handleWindowResize = () => SetScreenSize(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);


  const handleNavLinkPress = () => {
    if (screenSize < 791) {
      setOpen(false);
      document.getElementsByClassName('Navbar')[0].classList.toggle('active');
      document.getElementsByClassName('ham')[0].classList.toggle('active');
    }
  }


  let navBarClass = "Navbar navBarClosed";
  if (open) {
    navBarClass = "Navbar navBarOpen";
  }


  return (
    <div className={navBarClass}>

      <div className="navBarContainer">
        <span className="logo" onClick={() => history.push('/') }> Findr </span>
        <HamburgerButton open={open} setOpen={(isOpen: boolean): void => { setOpen(isOpen) }} />
      </div>

      <div className="searchBarContainer">
        <input className="searchBar" type="text" id="searchBar" name="searchBar" placeholder="Search" />
        <img className="searchIcon" src={search} />
      </div>


      <div className="navBarButtonGroup">
        <NavLink onClick={handleNavLinkPress} exact to='/home' className="navBarButton" activeClassName="selectedNavBarButton">Home</NavLink>
        <NavLink onClick={handleNavLinkPress} exact to='/explore' className="navBarButton" activeClassName="selectedNavBarButton">Explore</NavLink>
        {/* <NavLink exact to='/category-result/1' className="navBarButton" activeClassName="selectedNavBarButton">Post</NavLink> */}
        <NavLink onClick={handleNavLinkPress} exact to='/category-result/1' className="navBarButton" activeClassName="selectedNavBarButton">Category</NavLink>
        {/* <NavLink exact to='/category-result/1/subcategory-result/2' className="navBarButton" activeClassName="selectedNavBarButton">Account</NavLink> */}
        <NavLink onClick={handleNavLinkPress} exact to='/category-result/1/subcategory-result/2' className="navBarButton" activeClassName="selectedNavBarButton">Subcategory</NavLink>
        <NavLink onClick={handleNavLinkPress} exact to='/category-result/1/subcategory-result/2/uuid/1' className="navBarButton" activeClassName="selectedNavBarButton">UUID</NavLink>

      </div>



    </div>
  );
}

export default Navbar;