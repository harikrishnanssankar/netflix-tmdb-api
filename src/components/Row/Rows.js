import React, { useEffect, useState } from 'react';
import './Row.css';
import axios from '../../axios'


const Rows = ({ title, fetchUrl, isLargeRow = false }) => {
    const [movies, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl])


    return (
        <div className="row">
            <h2 className="row__title">{title}</h2>
            <div className={`row__posters ${isLargeRow && "row__postersLarge"}`}>

                {movies ? movies.map((movie) => (
                        <img
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            key={movie.id}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                                }`}
                            alt={movie.name}
                        />
                )) : ""};
            </div>
        </div>
    );
}

export default Rows;