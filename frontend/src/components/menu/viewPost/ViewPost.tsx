import React from 'react'
import basketballImage from '../../../images/basketball.jpeg';
import ImageGallery from '../../imageGallery/ImageGallery'

import './ViewPost.css';
export default function ViewPost() {
    return (
        <div className="viewpost-container">
            <ImageGallery type="viewpost" images={["https://shop.wilson.com/media/catalog/product/cache/38/image/9df78eab33525d08d6e5fb8d27136e95/c/7/c7dd204a5c8de77cfa036eb232a5e64659c7b2e1_WTB0516_Evolution_v2.jpg","https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/LeBron_James_Layup_%28Cleveland_vs_Brooklyn_2018%29.jpg/1280px-LeBron_James_Layup_%28Cleveland_vs_Brooklyn_2018%29.jpg", basketballImage, basketballImage]}/>
        </div>
    )
}
