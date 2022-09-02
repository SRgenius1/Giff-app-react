import React,{useEffect, useState} from "react";
import { Gif } from "./Gifs";
import {getgifs} from "../Services/GetGifs";
import { Spiner } from "./Spiner";

function ListOfGifs ({ params}) {
    const {keyword} = params;
    const [loading, setLoading] = useState(false);
    const [gifs, setGifs] = useState([]);

    useEffect(function () {
        setLoading(true);
        getgifs({keyword})
        .then(gifs => {
            setGifs(gifs) 
            setLoading(false)})}, [keyword]); 
            if (loading) return <Spiner/>;
    return <>
            {gifs.map(({title, url, id} ) => 
    <Gif title={title} url={url} id={id} pos={id}/>)}
            </>
};

export {ListOfGifs};