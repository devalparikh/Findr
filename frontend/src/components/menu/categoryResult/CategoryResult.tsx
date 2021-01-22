import React from 'react';

import PostCard from '../../../components/cards/postCard/PostCard';

import postCardHolder from '../../../images/postcard-placeholder.jpg';

import './CategoryResult.css'

function CategoryResult() {
    return (
        <div>

            <div className="category-title">Sports near you</div>

            {/* TODO: Populate using .map() with array passed in as a prop */}



            <div className="category-result-container">


                <div className="category-result-header">
                    <div className="category-result-title-group">
                        <div className="category-result-title">Basketball</div>
                        <div className="category-result-follow">Follow</div>
                    </div>
                    <div className="category-result-follow">View All</div>
                </div>

                <div className="category-result-row">
                    <PostCard title="Basketball court with 4 hoops inside the community." location="Grand View-on-Hudson, New York" review={5.0} reviewCount={69} images={[postCardHolder,postCardHolder,postCardHolder]} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={['https://images.pexels.com/photos/680074/pexels-photo-680074.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={['https://images.pexels.com/photos/2891884/pexels-photo-2891884.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={['https://images.pexels.com/photos/1045534/pexels-photo-1045534.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={['https://images.pexels.com/photos/680074/pexels-photo-680074.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={['https://images.pexels.com/photos/2891884/pexels-photo-2891884.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={['https://images.pexels.com/photos/1045534/pexels-photo-1045534.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={['https://images.pexels.com/photos/680074/pexels-photo-680074.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={['https://images.pexels.com/photos/2891884/pexels-photo-2891884.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={['https://images.pexels.com/photos/1045534/pexels-photo-1045534.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']} />
                    <div> &nbsp; </div>
                </div>


                <div className="category-result-header">
                    <div className="category-result-title-group">
                        <div className="category-result-title">Football</div>
                        <div className="category-result-follow">Follow</div>
                    </div>
                    <div className="category-result-follow">View All</div>
                </div>

                <div className="category-result-row">
                <PostCard title="Basketball court with 4 hoops inside the community." location="Grand View-on-Hudson, New York" review={5.0} reviewCount={69} images={[postCardHolder]} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={['https://images.pexels.com/photos/680074/pexels-photo-680074.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={['https://images.pexels.com/photos/2891884/pexels-photo-2891884.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={['https://images.pexels.com/photos/1045534/pexels-photo-1045534.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={['https://images.pexels.com/photos/680074/pexels-photo-680074.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={['https://images.pexels.com/photos/2891884/pexels-photo-2891884.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={['https://images.pexels.com/photos/1045534/pexels-photo-1045534.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={['https://images.pexels.com/photos/680074/pexels-photo-680074.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={['https://images.pexels.com/photos/2891884/pexels-photo-2891884.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={['https://images.pexels.com/photos/1045534/pexels-photo-1045534.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']} />
                    <div> &nbsp; </div>
                </div>

                <div className="category-result-header">
                    <div className="category-result-title-group">
                        <div className="category-result-title">Football</div>
                        <div className="category-result-follow">Follow</div>
                    </div>
                    <div className="category-result-follow">View All</div>
                </div>

                <div className="category-result-row">
                <PostCard title="Basketball court with 4 hoops inside the community." location="Grand View-on-Hudson, New York" review={5.0} reviewCount={69} images={[postCardHolder]} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={['https://images.pexels.com/photos/680074/pexels-photo-680074.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={['https://images.pexels.com/photos/2891884/pexels-photo-2891884.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={['https://images.pexels.com/photos/1045534/pexels-photo-1045534.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={['https://images.pexels.com/photos/680074/pexels-photo-680074.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={['https://images.pexels.com/photos/2891884/pexels-photo-2891884.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={['https://images.pexels.com/photos/1045534/pexels-photo-1045534.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={['https://images.pexels.com/photos/680074/pexels-photo-680074.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={['https://images.pexels.com/photos/2891884/pexels-photo-2891884.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']} />
                    <PostCard title="Test" location="Location" review={5.0} reviewCount={69} images={['https://images.pexels.com/photos/1045534/pexels-photo-1045534.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260']} />
                    <div> &nbsp; </div>
                </div>
            </div>



        </div>
    );
}

export default CategoryResult;
