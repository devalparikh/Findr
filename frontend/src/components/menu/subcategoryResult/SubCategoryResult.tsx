import React from 'react';
import PostCard from '../../../components/cards/postCard/PostCard';
import postCardHolder from '../../../images/postcard-placeholder.jpg';

import './SubCategoryResult.css'

interface iSubCategory{
    categoryName: string;
}

function SubCategoryResult(props:iSubCategory) {
    return (
        <div>
            <h1 className="h1-findr-title">{props.categoryName}</h1>
            <div className="subcategory-container"> 
                <PostCard title="Basketball court with 4 hoops inside the community." location="Grand View-on-Hudson, New York" review={5.0} reviewCount={69} images={[postCardHolder]}/>
                <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={['https://images.pexels.com/photos/680074/pexels-photo-680074.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']} />
                <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={['https://images.pexels.com/photos/2891884/pexels-photo-2891884.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']} />
                <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={['https://images.pexels.com/photos/1045534/pexels-photo-1045534.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']} />
            </div>
        </div>
    );
}

export default SubCategoryResult;
