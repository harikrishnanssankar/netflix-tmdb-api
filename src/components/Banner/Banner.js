import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from '../../axios';
import requests from '../../Requests';

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);


    const truncate = (string, n) => {
        return string && string.length > n ? string.substr(0, n - 1) + '...' : string;
    }


    return (
        // <header className="banner" style={{
        //     backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        //     backgroundSize: "cover",
        //     backgroundPosition: "center center",
        //     zIndex:-2

        // }}>
        //     <div className="banner__contents">
        //         <h1 className="banner__title">
        //             {movie?.title || movie?.name || movie?.original_name}
        //         </h1>

        //         <h1 className="banner__description">
        //             {truncate(movie?.overview,
        //                 150
        //             )}

        //         </h1>
        //         <div className="banner__buttons">
        //             <button className="banner__button">Play</button>
        //             <button className="banner__button">My list</button>
        //         </div>
        //     </div>
        // </header>

        <div className="banner">


            <div className="bg__img">
                <img className="background__img" src={`https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path}`} alt="bg img" />

            </div>
            <div className="banner__contents">
                <h1 className="banner__title">
                    { movie?.title || movie?.name || movie?.original_name}
                </h1>

                <h1 className="banner__description">
                    {truncate(movie && movie.overview,
                        150
                    )}

                </h1>
                <div className="banner__buttons">
                    <button className="banner__button"><i className="fas fa-play"></i>Play</button>
                    <button className="banner__button info__bannerbutton"><img className="info__icon" src="images/info.svg" alt="" /> More Info</button>
                </div>
            </div>
            <div className="banner--fadeBottom" />

        </div>
    );
}

export default Banner;
