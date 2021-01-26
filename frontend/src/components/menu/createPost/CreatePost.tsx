import React from 'react'
import './CreatePost.css';

export default function CreatePost() {
    return (
        <div className="create-post-container">
            <h1 className="create-post-title">Share a new (location/activity)</h1>
            <div className="create-post-input-container">
                <input className="user-post-name" placeholder="Name"/>
                <textarea className= "user-post-description" placeholder="Description"/>
                <input className="user-post-location" placeholder="Select a location on the map" disabled={true}/>
            </div>
            <button className="create-post-submit"> Post </button>
        </div>
    )
}
