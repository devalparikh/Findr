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
        <CategoryCard title="Sports" image={basketballImage}></CategoryCard>
        
      </div>
    </div>
  );
}

export default Main;
