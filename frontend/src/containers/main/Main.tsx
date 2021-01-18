import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import CategoryCard from '../../components/cards/categoryCard/CategoryCard';

import basketballImage from '../../images/basketball.jpeg';



function Main() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <CategoryCard title="Sports" image={basketballImage}></CategoryCard>
        <CategoryCard title="Date"></CategoryCard>

      </div>
    </div>
  );
}

export default Main;
