import React from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import PostCard from '../cards/postCard/PostCard';

import './Profile.css';

interface iProfile {
    currentUser: any;
}

function Profile(props: iProfile) {

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

    const { currentUser } = props;
    console.log(currentUser)

    return (
        <Container fluid className="full-container">

            <Row className="profile-header">
                <Col xs={12}>
                    <h1 className="h1-findr-title">{currentUser?.username || <Spinner animation="border" color="#f8f4e3" />}</h1>

                </Col>
                <Col xs={12}>
                    <div className="points-title">{currentUser?.points || <Spinner animation="border" color="#f8f4e3" />}&nbsp;points</div>
                </Col>
            </Row>

            <Row className="home-row-container">
                <Col xs={12}>
                    <h1 className="homepage-subtitle-text">Your Posts</h1>
                    <Row className="home-row">
                        <PostCard title="Basketball court with 4 hoops inside the community." location="Grand View-on-Hudson, New York" review={5.0} reviewCount={69} images={tempArray} url="/category-result/sports/subcategory-result/basketball/uuid/example_uuid" />
                        <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
                        <PostCard title="Basketball court with 4 hoops inside the community." location="Grand View-on-Hudson, New York" review={5.0} reviewCount={69} images={tempArray} />
                        <PostCard title="Basketball court with 4 hoops inside the community." location="Grand View-on-Hudson, New York" review={5.0} reviewCount={69} images={tempArray} />
                    </Row>
                </Col>
            </Row>

            <Row className="home-row-container">
                <Col xs={12}>
                    <h1 className="homepage-subtitle-text">Liked Posts</h1>
                    <Row className="home-row">
                        <PostCard title="Basketball court with 4 hoops inside the community." location="Grand View-on-Hudson, New York" review={5.0} reviewCount={69} images={tempArray} url="/category-result/sports/subcategory-result/basketball/uuid/example_uuid" />
                        <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
                        <PostCard title="Basketball court with 4 hoops inside the community." location="Grand View-on-Hudson, New York" review={5.0} reviewCount={69} images={tempArray} />
                        <PostCard title="Basketball court with 4 hoops inside the community." location="Grand View-on-Hudson, New York" review={5.0} reviewCount={69} images={tempArray} />
                    </Row>
                </Col>
            </Row>

        </Container>
    );
}

export default Profile;
