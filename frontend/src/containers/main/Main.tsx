import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import MapBox from '../../components/map/Map';
import Home from '../../components/home/Home';

import basketballImage from '../../images/basketball.jpeg';
import Explore from '../../components/menu/explore/Explore';
import CategoryResult from '../../components/menu/categoryResult/CategoryResult';
import SubCategoryResult from '../../components/menu/subcategoryResult/SubCategoryResult';
import ViewPost from '../../components/menu/viewPost/ViewPost';


import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import CreatePost from '../../components/menu/createPost/CreatePost';
import Login from '../../components/auth/Login';
import Signup from '../../components/auth/Signup';
import { useFetch } from '../../services/useFetch';
import Profile from '../../components/profile/Profile';


//////////////////////
//    Playground    //
//////////////////////

function Main() {

  const location = useLocation();
  const [screenSize, SetScreenSize] = useState(window.innerWidth);
  const breakpoint = 790;

  //NOTE: cookies cannt be access with httponly: true
  // const cookies = new Cookies();
  // console.log("universal cookie\n" + cookies.get("express:sess"))

  const [isLoading, APIresult, APIerror, fetchAPI] = useFetch();

  const [currentUser, SetCurrentUser] = useState({});

  useEffect(() => {
    fetchAPI({
      method: 'get',
      url: 'api/users/currentuser',
      withCredentials: true
    });
  }, []);

  useEffect(() => {
    SetCurrentUser(APIresult?.currentUser);
    if (APIresult?.currentUser) {
      localStorage.setItem('loggedIn', 'true');
    }
  }, [APIresult])

  useEffect(() => {
    if (APIerror) {
      localStorage.removeItem('loggedIn');
    }
  }, [APIerror])


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

        {/* <Route exact path="/">
          <div className="home-container">
            <Home />
          </div>
        </Route> */}

        <Route exact path="/home">
          <div className="home-container">
            <Home />
          </div>
        </Route>

        <Route exact path="/login">
          <div className="login-container">
            <Login />
          </div>
        </Route>

        <Route exact path="/signup">
          <div className="signup-container">
            <Signup />
          </div>
        </Route>

        <Route exact path="/profile">
          {
            localStorage.getItem('loggedIn') ?
              <div className="home-container">
                <Profile currentUser={currentUser} />
              </div>
              :
              <div className="login-container">
                <Login />
              </div>
          }

        </Route>

        {/* Menu (left side) */}
        {

          location.pathname !== '/home' && location.pathname !== '/signup' && location.pathname !== '/login' && location.pathname !== '/profile' && location.pathname !== '/' &&

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

              <Route exact path="/createpost">
                <CreatePost />
              </Route>

            </Switch>

          </div>
        }


        {/* Map (right side) */}
        {
          location.pathname !== '/home' && location.pathname !== '/signup' && location.pathname !== '/login' && location.pathname !== '/profile' && location.pathname !== '/' && screenSize > breakpoint &&

          <div className="main-map-container">
            <MapBox />
          </div>

        }



      </div>
    </div>
  );
}

export default Main;
