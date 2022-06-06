import "./App.css";
import Header from "./components/Header";
import MainMovie from "./components/MainMovie";
import MovieCard from "./components/MovieCard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useState, useEffect } from "react";
import movieData from "./movies";

function App() {
  const movies = movieData.map((movie) => {
    return (
      <MovieCard key={movie.id} title={movie.title} poster={movie.poster} />
    );
  });
  return (
    <div className="App">
      <Header />
      <MainMovie />
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        nav
        autoHeightClass={true}
      >
        {movies}
      </OwlCarousel>
    </div>
  );
}

export default App;
