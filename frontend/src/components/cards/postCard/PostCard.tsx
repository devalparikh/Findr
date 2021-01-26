import React from 'react';
import star from '../../../images/star.svg';
import ImageGallery from '../../imageGallery/ImageGallery';
import './postCard.css';

import { useHistory } from 'react-router-dom';

interface iPostCard {
    title: string;
    location: string;
    review: number;
    reviewCount: number;
    images: Array<any>;

    url?: string; // Button url
}

//Postcard
// - First half image
//  - title - user defined
//  - location
//  - review - user based

function PostCard(props: iPostCard) {

    const history = useHistory();

    const handleOnClick = () => {
        if (props.url) {
            history.push(props.url)
        }
    }

    return (

        <div className="postcard-container">
            {/* @ts-ignore */}
            <ImageGallery type="postcard" images={props.images} />

            <div className="postcard-content" onClick={handleOnClick}>
                <div className="postcard-title"> {props.title} </div>
                <div className="postcard-location"> {props.location} </div>
                <div className="postcard-review">
                    <img className="postcard-star" src={star} /> 
                    <div className="postcard-review-number">{props.review}</div>
                    <span className="postcard-review-count"> ({props.reviewCount} reviews) </span>
                </div>
            </div>
        </div>
    );
}

export default PostCard;