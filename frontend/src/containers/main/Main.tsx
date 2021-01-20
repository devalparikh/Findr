import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import CategoryCard from '../../components/cards/categoryCard/CategoryCard';
import PostCard from '../../components/cards/postCard/PostCard';
import MapBox from '../../components/map/Map';

import basketballImage from '../../images/basketball.jpeg';
import postCardHolder from '../../images/postcard-placeholder.jpg';


//////////////////////
//    Playground    //
//////////////////////

function Main() {
  return (
    <div className="App">
      <Navbar />

      <div style={{ display: 'flex' }}>
        <div style={{ width: "40%", height: "100vh", overflowY: "auto" }}>
          <h1 style={{ fontWeight: 'bolder', margin: "60px 40px 10px 40px", textAlign: 'center' }}>Categories</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', margin: "20px" }}>
            <CategoryCard title="Sports" image={basketballImage} />
            <CategoryCard title="Date" image={'https://images.pexels.com/photos/4255483/pexels-photo-4255483.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'} />
            <CategoryCard title="Outdoors" image={'https://images.pexels.com/photos/745045/pexels-photo-745045.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'} />
            <CategoryCard title="Indoors" image={'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'} />



          </div>

          <h1 style={{ fontWeight: 'bolder', margin: "60px 40px 10px 40px", textAlign: 'center' }}>Basketball</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', margin: "20px" }}>
            <PostCard title="Basketball court with 4 hoops inside the community." location="Grand View-on-Hudson, New York" review={5.0} reviewCount={69} image={postCardHolder} />
            <PostCard title="Test" location="Location" review={5.0} reviewCount={69} image={'https://images.pexels.com/photos/680074/pexels-photo-680074.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'} />
            <PostCard title="Test" location="Location" review={5.0} reviewCount={69} image={'https://images.pexels.com/photos/2891884/pexels-photo-2891884.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'} />
            <PostCard title="Test" location="Location" review={5.0} reviewCount={69} image={'https://images.pexels.com/photos/1045534/pexels-photo-1045534.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'} />
          </div>
        </div>

        <div style={{ width: "60%", height: "100vh" }}>
          <MapBox />
        </div>

      </div>
    </div>
  );
}

export default Main;
