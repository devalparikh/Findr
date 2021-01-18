import React from 'react';
import Navbar from '../../components/navbar/Navbar'
import CategoryCard  from '../../components/cards/categoryCard/CategoryCard'

function Main() {
  return (
    <div className="App">
      <Navbar />
      <CategoryCard></CategoryCard>
    </div>
  );
}

export default Main;
