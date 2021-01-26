import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import CategoryCard from '../../components/cards/categoryCard/CategoryCard';
import PostCard from '../../components/cards/postCard/PostCard';
import MapBox from '../../components/map/Map';
import Home from '../../components/home/Home';

import basketballImage from '../../images/basketball.jpeg';
import postCardHolder from '../../images/postcard-placeholder.jpg';
import Explore from '../../components/menu/explore/Explore';
import CategoryResult from '../../components/menu/categoryResult/CategoryResult';
import SubCategoryResult from '../../components/menu/subcategoryResult/SubCategoryResult';
import ViewPost from '../../components/menu/viewPost/ViewPost';

import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";


//////////////////////
//    Playground    //
//////////////////////

function Main() {

  const location = useLocation();

  const [screenSize, SetScreenSize] = useState(window.innerWidth);
  const breakpoint = 790;

  useEffect(() => {
    const handleWindowResize = () => SetScreenSize(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);


  return (
    <div className="App">
      <Navbar />

      <div className="main-container">

        <Route exact path="/">
          <div className="home-container">
            <Home />
          </div>
        </Route>

        <Route exact path="/home">
          <div className="home-container">
            <Home />
          </div>
        </Route>

        {/* Menu (left side) */}
        {

          location.pathname !== '/home' && location.pathname !== '/' &&

          <div className="main-menu-container">

            <Switch>

              <Route exact path="/explore">
                {/* TODO: Pass in array of categories */}
                <Explore />
              </Route>

              <Route exact path="/category-result/:category_id">
                {/* TODO: Pass in array of categories */}
                <CategoryResult />
              </Route>

              <Route exact path="/category-result/:category_id/subcategory-result/:subcategory_id">
                {/* TODO: Pass in sub category data*/}
                <SubCategoryResult categoryName={"Basketball"} />
              </Route>

              <Route exact path="/category-result/:category_id/subcategory-result/:subcategory_id/uuid/:uuid">
                {/* TODO: */}
                <ViewPost
                  Name="Basketball court with 4 hoops"
                  Review={4.5}
                  Review_Count={291}
                  Location="4400 University Dr, Fairfax, VA 22030"
                  Category="Sports"
                  Subcategory="Basketball"
                  Description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                  Images={["https://shop.wilson.com/media/catalog/product/cache/38/image/9df78eab33525d08d6e5fb8d27136e95/c/7/c7dd204a5c8de77cfa036eb232a5e64659c7b2e1_WTB0516_Evolution_v2.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/LeBron_James_Layup_%28Cleveland_vs_Brooklyn_2018%29.jpg/1280px-LeBron_James_Layup_%28Cleveland_vs_Brooklyn_2018%29.jpg", basketballImage, basketballImage]}
                />
              </Route>

            </Switch>

          </div>
        }



        {/* Map (right side) */}
        {
          location.pathname !== '/home' && location.pathname !== '/' && screenSize > breakpoint &&

          <div className="main-map-container">
            <MapBox />
          </div>

        }



      </div>
    </div>
  );
}

export default Main;
