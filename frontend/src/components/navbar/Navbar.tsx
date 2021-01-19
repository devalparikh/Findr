import React from 'react';
import './Navbar.css';
import search from '../../images/search.svg';

function Navbar() {
  return (
    <div className="Navbar">         
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
      </div>
  );
}

export default Navbar;