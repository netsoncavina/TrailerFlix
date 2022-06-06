import "./styles/mainMovie.css";
import "./styles/responsive.css";
import { useState } from "react";
export default function MainMovie(props) {
  const [title, setTitle] = useState("House of Cards");
  const [wallpaper, setWallpaper] = useState(
    "https://wallpapercave.com/wp/wp1839801.jpg"
  );
  const [description, setDescription] = useState(
    "Um político inescrupuloso não mede esforços para conquistar o poder nos EUA neste drama vencedor do Emmy e do Globo de Ouro."
  );
  const [trailer, setTrailer] = useState(
    "https://www.youtube.com/watch?v=8QnMmpfKWvo"
  );
  if (props.title) {
    setTitle(props.title);
  }
  if (props.wallpaper) {
    setWallpaper(props.wallpaper);
  }
  if (props.description) {
    setDescription(props.description);
  }
  if (props.trailer) {
    setTrailer(props.trailer);
  }

  return (
    <div
      className="filme-principal"
      id="filme-principal"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      <div className="container">
        <h3 className="titulo" id="titulo">
          {title}
        </h3>
        <p className="descricao" id="sinopse">
          {description}
        </p>

        <div className="botoes">
          <a className="popup" id="trailer" href={trailer}>
            <button role="button" className="botao">
              <i className="fas fa-play"></i>
              ASSISTIR TRAILER
            </button>
          </a>
          <a id="info" onclick="">
            <button role="button" className="botao">
              <i className="fas fa-info-circle"></i>
              MAIS INFORMAÇÕES
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
