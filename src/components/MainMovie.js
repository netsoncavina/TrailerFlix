import "./styles/mainMovie.css";
import "./styles/responsive.css";
export default function MainMovie() {
  return (
    <div class="filme-principal" id="filme-principal">
      <div class="container">
        <h3 class="titulo" id="titulo">
          House of Cards
        </h3>
        <p class="descricao" id="sinopse">
          Um político inescrupuloso não mede esforços para conquistar o poder
          nos EUA neste drama vencedor do Emmy e do Globo de Ouro.
        </p>
        <div class="botoes">
          <a
            class="popup"
            id="trailer"
            href="https://www.youtube.com/watch?v=8QnMmpfKWvo"
          >
            <button role="button" class="botao">
              <i class="fas fa-play"></i>
              ASSISTIR TRAILER
            </button>
          </a>
          <a id="info" onclick="">
            <button role="button" class="botao">
              <i class="fas fa-info-circle"></i>
              MAIS INFORMAÇÕES
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
