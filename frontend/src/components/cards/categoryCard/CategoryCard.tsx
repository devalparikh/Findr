import React from 'react';
import './categoryCard.css';

interface iCategoryCard {
    title: string;
    image?: any;
}

function CategoryCard(props: iCategoryCard) {

    const { title, image } = props;

    return (
        <div>



            <div className="inner-card">

                <div className="card-text">{title}</div>

                <div className="findr-card" style={{
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