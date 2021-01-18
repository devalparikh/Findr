import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import CategoryCard from '../../components/cards/categoryCard/CategoryCard';
import PostCard from '../../components/cards/postCard/PostCard';


import basketballImage from '../../images/basketball.jpeg';



function Main() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <CategoryCard title="Sports" image={basketballImage}/>
        <PostCard title="Test" location="Location" review={5.0} reviewCount={69}/>
        <PostCard title="Test" location="Location" review={5.0} reviewCount={69}/>
        <PostCard title="Test" location="Location" review={5.0} reviewCount={69}/>

      </div>
    </div>
  );
}

export default Main;
