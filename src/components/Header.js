import "./styles/header.css";
import "./styles/responsive.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <h2 className="logo">TRAILERFLIX</h2>
        <nav>
          <a href="#">Inicio</a>
          <a href="#">Series</a>
          <a href="#">Filmes</a>
          <a href="#">Documentarios</a>
        </nav>
      </div>
    </header>
  );
}
