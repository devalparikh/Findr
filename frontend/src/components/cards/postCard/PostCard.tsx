import React from 'react';
import star from '../../../images/star.svg';
import ImageGallery from '../../imageGallery/ImageGallery';
import './postCard.css';

interface iPostCard {
    title: string;
    location: string;
    review: number;
    reviewCount: number;
    images: Array<any>;
}

//Postcard
// - First half image
//  - title - user defined
//  - location
//  - review - user based

function PostCard(props: iPostCard) {

    return (
        
        <div className="postcard-container">
            {/* @ts-ignore */}
            <ImageGallery type="postcard" images={props.images}/>

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