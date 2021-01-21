import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import CategoryCard from '../../components/cards/categoryCard/CategoryCard';
import PostCard from '../../components/cards/postCard/PostCard';
import MapBox from '../../components/map/Map';

import basketballImage from '../../images/basketball.jpeg';
import postCardHolder from '../../images/postcard-placeholder.jpg';
import Explore from '../../components/menu/explore/Explore';


//////////////////////
//    Playground    //
//////////////////////

function Main() {
  return (
    <div className="App">
      <Navbar />

      {/* Menu (left side) */}
      <div style={{ display: 'flex' }}>


        <div style={{ width: "40%", maxWidth: "700px", height: "100vh", overflowY: "auto" }}>
          {/* TODO: Pass in array of categories */}
          <Explore />
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
