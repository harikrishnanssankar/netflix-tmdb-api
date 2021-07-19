import Banner from "../components/Banner/Banner";
import React from 'react';
import "./HomeScreen.css";
import Nav from "../components/Nav/Nav";
import requests from "../Requests";
import Rows from "../components/Row/Rows";


const HomeScreen = () => {
    return (
        <div className="homeScreen">
            <Nav />
            <Banner />
            <div className="movie__rows">
                <Rows title='Trending Now' fetchUrl={requests.fetchTrending}/>
                <Rows title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
                <Rows title='Top Rated' fetchUrl={requests.fetchTopRated} />
                <Rows title='Action Movies' fetchUrl={requests.fetchActionMovies} />
                <Rows title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
                <Rows title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
                <Rows title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
                <Rows title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
            </div>
        </div>
    );
}
export default HomeScreen;