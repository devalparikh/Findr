import React from 'react';
import '../card.css';

interface iPostCard {
    title: string;
}

function PostCard(props: iPostCard) {

    return (
        <div>



            <div className="inner-card">

                <div className="card-text">hi</div>

                <div className="findr-card">

                </div>


            </div>
        </div>
    );
}

export default PostCard;