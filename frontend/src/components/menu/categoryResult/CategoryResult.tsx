import React from 'react';
import PostCard from '../../../components/cards/postCard/PostCard';
import postCardHolder from '../../../images/postcard-placeholder.jpg';
import './CategoryResult.css'
import { useHistory } from 'react-router-dom';

function CategoryResult() {

    const history = useHistory();

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

    return (
        <div>

            <h1 className="h1-findr-title">Sports near you</h1>

            {/* TODO: Populate using .map() with array passed in as a prop */}



            <div className="category-result-container">


                <div className="category-result-header">
                    <div className="category-result-title-group">
                        <div className="menu-subtitle-text">Basketball</div>
                        <div className="category-result-follow">Follow</div>
                    </div>
                    <div className="category-result-follow" onClick={() => history.push('/category-result/sports/subcategory-result/basketball')}>View All</div>
                </div>

                <div className="category-result-row">
                    <PostCard title="Basketball court with 4 hoops inside the community." location="Grand View-on-Hudson, New York" review={5.0} reviewCount={69} images={tempArray} url="/category-result/sports/subcategory-result/basketball/uuid/example_uuid"/>
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
                    <div> &nbsp; </div>            </div>            <div className="category-result-header">
                    <div className="category-result-title-group">
                        <div className="menu-subtitle-text">Football</div>
                        <div className="category-result-follow">Follow</div>
                    </div>
                    <div className="category-result-follow">View All</div>
                </div>

                <div className="category-result-row">
                <PostCard title="Basketball court with 4 hoops inside the community." location="Grand View-on-Hudson, New York" review={5.0} reviewCount={69} images={tempArray} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
                    <div> &nbsp; </div>
                </div>

                <div className="category-result-header">
                    <div className="category-result-title-group">
                        <div className="menu-subtitle-text">Football</div>
                        <div className="category-result-follow">Follow</div>
                    </div>
                    <div className="category-result-follow">View All</div>
                </div>

                <div className="category-result-row">
                <PostCard title="Basketball court with 4 hoops inside the community." location="Grand View-on-Hudson, New York" review={5.0} reviewCount={69} images={tempArray} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={tempArray} />
                    <div> &nbsp; </div>
                </div>
            </div>



        </div>
    );
}

export default CategoryResult;
