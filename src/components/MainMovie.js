import "./styles/mainMovie.css";
import "./styles/responsive.css";
export default function MainMovie() {
  return (
    <div className="filme-principal" id="filme-principal">
      <div className="container">
        <h3 className="titulo" id="titulo">
          House of Cards
        </h3>
        <p className="descricao" id="sinopse">
          Um político inescrupuloso não mede esforços para conquistar o poder
          nos EUA neste drama vencedor do Emmy e do Globo de Ouro.
        </p>
        <div className="botoes">
          <a
            className="popup"
            id="trailer"
            href="https://www.youtube.com/watch?v=8QnMmpfKWvo"
          >
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
