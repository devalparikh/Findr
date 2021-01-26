import React from 'react';
import './categoryCard.css';
import { useHistory } from 'react-router-dom';

interface iCategoryCard {
    title: string;
    image?: any;

    url?: string; // Button url
}

function CategoryCard(props: iCategoryCard) {

    const { title, image, url } = props;
    const history = useHistory();


    const handleOnClick = () => {
        if(url) {
            history.push(url)
        }
    }

    return (
        <div className="categorycard" onClick={handleOnClick}>
            <div className="categorycard-container">

                <div className="categorycard-text">{title}</div>

                <div className="categorycard-body" style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    filter: 'brightness(60%)'
                }}>

                </div>
            </div>
        </div>
    );
}

export default CategoryCard;