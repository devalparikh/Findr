import React from 'react';
import star from '../../../images/star.svg';
import './postCard.css';

interface iPostCard {
    title: string;
    location: string;
    review: number;
    reviewCount: number;
    image: any;
}

//Postcard
// - First half image
//  - title - user defined
//  - location
//  - review - user based

function PostCard(props: iPostCard) {

    return (
        
        <div className="postcard-container">
            <div className="postcard-img" style={{
                backgroundImage: `url(${props.image})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
            </div>

            <div className="postcard-content">
                <div className="postcard-title"> {props.title} </div>
                <div className="postcard-location"> {props.location} </div>
                <div className="postcard-review">
                    <img className="postcard-star" src={star} /> {props.review}
                    <span className="postcard-review-count"> ({props.reviewCount} reviews) </span>
                </div>
            </div>
        </div>
    );
}

export default PostCard;