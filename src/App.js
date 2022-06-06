import "./App.css";
import Header from "./components/Header";
import MainMovie from "./components/MainMovie";
import MovieCard from "./components/MovieCard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function App() {
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
        <MovieCard />
      </OwlCarousel>
    </div>
  );
}

export default App;
