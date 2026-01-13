import React from "react";
import "../style/news-item.css";

const NewsItem = ({videoSrc, header}) =>{
    return( 
        <div className="container">
            <iframe class="video" src={videoSrc} title={videoSrc}/>
            <h1 className="header">{header}</h1>
        </div>
    );
};

export default NewsItem;