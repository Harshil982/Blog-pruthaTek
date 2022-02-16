import React from 'react';
import './../Styles/LatestStories.css'
import LatestStoriesData from './../../../JSON/LAtestStories.json'

function LatestStories(props) {
    return (
        <div className="latest-stories">
            <p className="latest-title">LATEST STORIES</p>
            {LatestStoriesData.map((blog, index) => (
                <div className="latest-card" key={index}>
                    <img src={blog.imgPath} alt="hello" className="latest-card-img" />
                    <div className="latest-card-text-content">
                        <h3>{blog.blogTitle}</h3>
                        <p className="description">{blog.shortDescription}</p>
                        <p className="by-author">{blog.author}</p>
                    </div>
                    <p className="last-update">{blog['last-update']}</p>
                </div>
            ))}
        </div>
    );
}

export default LatestStories;