import MainMovie from "./MainMovie";
import MovieCard from "./MovieCard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import movieData from "../movies";
export default function Content() {
  function getWallpaper(title) {
    return `https://www.omdbapi.com/?t=${title}&apikey=6022c906`;
  }
  const movies = movieData.map((movie) => {
    return (
      <MovieCard key={movie.id} title={movie.title} poster={movie.poster} />
    );
  });
  return (
    <>
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
    </>
  );
}
