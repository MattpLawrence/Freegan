import React from "react";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import Slider from "../components/Slider"
import Hscroll from "../components/Hscroll"

const Home = () => {
    return (
        <div className="container">
            <Navbar />
            <Searchbar />
            <Slider />
            <Hscroll />
        </div>
    );
};

export default Home;