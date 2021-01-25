import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CategoryCard from '../../components/cards/categoryCard/CategoryCard';
import PostCard from '../../components/cards/postCard/PostCard';
import basketballImage from '../../images/basketball.jpeg';


import './Home.css';

function Home() {

  let tempArray = [
    'https://images.pexels.com/photos/680074/pexels-photo-680074.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/2891884/pexels-photo-2891884.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/1045534/pexels-photo-1045534.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/680074/pexels-photo-680074.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/2891884/pexels-photo-2891884.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/1045534/pexels-photo-1045534.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/1045534/pexels-photo-1045534.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/680074/pexels-photo-680074.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/2891884/pexels-photo-2891884.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/1045534/pexels-photo-1045534.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
];

  return (
  <Container fluid className="full-container">
    <Row>
      <Col xs={12} lg={6}>
        <h1 className="row-title">Just for You</h1>
        <Row>
        <PostCard title="Basketball court with 4 hoops inside the community." location="Grand View-on-Hudson, New York" review={5.0} reviewCount={69} images={tempArray} />
          <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
          <PostCard title="Basketball court with 4 hoops inside the community." location="Grand View-on-Hudson, New York" review={5.0} reviewCount={69} images={tempArray} />
          <PostCard title="Basketball court with 4 hoops inside the community." location="Grand View-on-Hudson, New York" review={5.0} reviewCount={69} images={tempArray} />
          
        </Row>
      
      </Col>
       
      <Col xs={12} lg={6}>
        <h1 className="row-title">Recently Visited  </h1>
        <Row>
          <PostCard title="Basketball court with 4 hoops inside the community." location="Grand View-on-Hudson, New York" review={5.0} reviewCount={69} images={tempArray} />
          <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
          <PostCard title="Basketball court with 4 hoops inside the community." location="Grand View-on-Hudson, New York" review={5.0} reviewCount={69} images={tempArray} />
          <PostCard title="Basketball court with 4 hoops inside the community." location="Grand View-on-Hudson, New York" review={5.0} reviewCount={69} images={tempArray} />
        </Row>
      
      </Col>
    </Row>

    <Row>
      <Col xs={12} lg={6}>
        <h1 className="row-title">New Categories For You</h1>
        <Row>
          <CategoryCard title="Sports" image={basketballImage} />
          <CategoryCard title="Date" image={'https://images.pexels.com/photos/4255483/pexels-photo-4255483.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'} />
          <CategoryCard title="Sports" image={basketballImage} />
          <CategoryCard title="Sports" image={basketballImage} />
          
        </Row>
      
      </Col>
       
      <Col xs={12} lg={6}>
        <h1 className="row-title">Saved Categories </h1>
        <Row>
          <CategoryCard title="Sports" image={basketballImage} />
          <CategoryCard title="Date" image={'https://images.pexels.com/photos/4255483/pexels-photo-4255483.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'} /> 
          <CategoryCard title="Sports" image={basketballImage} />
          <CategoryCard title="Sports" image={basketballImage} />
          
        </Row>
      
      </Col>
    </Row>

    <Row>
      <Col xs={12} lg={6}>
        <h1 className="row-title">Just for You</h1>
        <Row>
        <PostCard title="Basketball court with 4 hoops inside the community." location="Grand View-on-Hudson, New York" review={5.0} reviewCount={69} images={tempArray} />
          <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
          <PostCard title="Basketball court with 4 hoops inside the community." location="Grand View-on-Hudson, New York" review={5.0} reviewCount={69} images={tempArray} />
          <PostCard title="Basketball court with 4 hoops inside the community." location="Grand View-on-Hudson, New York" review={5.0} reviewCount={69} images={tempArray} />
          
        </Row>
      
      </Col>
       
      <Col xs={12} lg={6}>
        <h1 className="row-title">Recently Visited  </h1>
        <Row>
          <PostCard title="Basketball court with 4 hoops inside the community." location="Grand View-on-Hudson, New York" review={5.0} reviewCount={69} images={tempArray} />
          <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
          <PostCard title="Basketball court with 4 hoops inside the community." location="Grand View-on-Hudson, New York" review={5.0} reviewCount={69} images={tempArray} />
          <PostCard title="Basketball court with 4 hoops inside the community." location="Grand View-on-Hudson, New York" review={5.0} reviewCount={69} images={tempArray} />
        </Row>
      
      </Col>
    </Row>
  </Container>
  );
}

export default Home;
