import React from 'react';
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
  return (
    <div className="App">
      <Navbar />

      {/* Menu (left side) */}
      <div style={{ display: 'flex' }}>


        <div style={{ width: "40%", height: "100vh", overflowY: "auto", zIndex: 2, boxShadow: "5px 0px 8px 0px #888888" }}>
          {/* TODO: Pass in array of categories */}
          {/* <Explore /> */}

          {/* TODO: Pass in array of categories */}
          <CategoryResult />

        </div>




        {/* Map (right side) */}
        <div style={{ width: "60%", height: "100vh" }}>
          <MapBox />
        </div>


      </div>
    </div>
  );
}

export default Main;
