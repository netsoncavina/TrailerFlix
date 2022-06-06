import "./App.css";
import "./components/styles/responsive.css";
import Header from "./components/Header";
import MainMovie from "./components/MainMovie";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <div className="App">
      <Header />
      <MainMovie />
    </div>
  );
}

export default App;
