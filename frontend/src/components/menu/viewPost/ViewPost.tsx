// @ts-nocheck

import React, { useState } from 'react'
import ImageGallery from '../../imageGallery/ImageGallery'

import StarRatings from 'react-star-ratings';
import './ViewPost.css';

interface iViewPost {
    UUID?: UUID,
    Name?: string,
    Description?: string,
    Images?: Array<string>,
    Location?: string,
    Category?: string, // TODO: Add category to database attribute
    Subcategory?: string, // TODO: make UUID
    Views?: number,
    Likes?: number,
    Review?: number,
    Review_Count?: number
}

export default function ViewPost(props: iViewPost) {
    const { UUID, Name, Description, Images, Location, Category, Subcategory, Views, Likes, Review, Review_Count} = props;
    const [rating, SetRating] = useState(Review);
    
    return (
        <div className="viewpost-container">
            <ImageGallery type="viewpost" images={Images}/>

            <div className="viewpost-content">
                <h1 className="viewpost-location-name">{Name}</h1>

                <div className="viewpost-rating-container">
                    <StarRatings
                        rating={rating}
                        changeRating={SetRating}
                        numberOfStars={5}
                        name='rating'
                        starDimension="23px"
                        starSpacing="1px"
                        starHoverColor='#f59873'
                        starRatedColor='#FF6629'
                    />
                    <div className="viewpost-num-ratings">({Review_Count})</div>
                 </div>

                <div className="viewpost-location-address"> <span className="viewpost-subtitle-header">Location Address: </span> {Location}</div>

                <div className="viewpost-category"><span className="viewpost-subtitle-header">Category:</span> {Category}</div>
                <div className="viewpost-subcategory"><span className="viewpost-subtitle-header">Subcategory:</span> {Subcategory}</div>

                <div className="viewpost-description"> <span className="viewpost-subtitle-header">Description:</span> { Description}</div>
                
            </div>
        </div>

    )
}
