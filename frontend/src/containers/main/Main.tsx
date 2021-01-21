import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import CategoryCard from '../../components/cards/categoryCard/CategoryCard';
import PostCard from '../../components/cards/postCard/PostCard';
import MapBox from '../../components/map/Map';

import basketballImage from '../../images/basketball.jpeg';
import postCardHolder from '../../images/postcard-placeholder.jpg';
import Explore from '../../components/menu/explore/Explore';
import CategoryResult from '../../components/menu/categoryResult/CategoryResult';


//////////////////////
//    Playground    //
//////////////////////

function Main() {

  const [screenSize, SetScreenSize] = useState(window.innerWidth);
  const breakpoint = 790;

  useEffect(() => {
    const handleWindowResize = () => SetScreenSize(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);


  return (
    <div className="App">
      <Navbar />

      <div className="main-container">

        {/* Menu (left side) */}
        <div className="main-menu-container">
          {/* TODO: Pass in array of categories */}
          {/* <Explore /> */}

          {/* TODO: Pass in array of categories */}
          <CategoryResult />

        </div>


        {/* Map (right side) */}
        <div className="main-map-container">
          { screenSize > breakpoint ? <MapBox /> : <div></div>}
        </div>


      </div>
    </div>
  );
}

export default Main;
