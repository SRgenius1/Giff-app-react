import React,{useState} from "react";
import { Link, useLocation } from "wouter";

function Home () {
    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation();

    const handleSubmit = evento => {
        evento.preventDefault();
        pushLocation(`/search/${keyword}`);
    };

    const handleChange = evento => {
        setKeyword(evento.target.value);
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input
            placeholder="Search a gif now!"
            value={keyword}
            onChange={handleChange}
            />
        </form>
            <h3>Popular gifs</h3>
        <Link to='/search/pandas'>Gifs de pandas</Link>
        <Link to='/search/football'>Gifs de Football</Link>
        <Link to='/search/matrix'>Gifs de Matrix</Link>
        </>
    );
};

export {Home};