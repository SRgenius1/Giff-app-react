import React from "react";
import './Giff.css';

function Gif ({title, id, url, pos}) {
    return (
        <a href={`#${id}`} className="Gif">
        <h4>{title}</h4>
        <img src={url} alt={title} key={pos}/>
      </a>
    );
};

export{ Gif};