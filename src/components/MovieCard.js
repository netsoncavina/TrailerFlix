import "./styles/movieCard.css";
import "./styles/responsive.css";
import { useState, useEffect } from "react";

export default function MovieCard(props) {
  const [movie, setMovie] = useState([]);
  const [poster, setPoster] = useState("");
  useEffect(() => {
    const data = async () => {
      var url = `http://www.omdbapi.com/?t=${props.title}&apikey=6022c906`;
      const data = await fetch(url);
      const movie = await data.json();
      setMovie(movie);
      setPoster(movie.Poster);
    };
    data();
  }, []);

  return (
    <div className="item">
      <img className="box-filme" src={poster} />
    </div>
  );
}
