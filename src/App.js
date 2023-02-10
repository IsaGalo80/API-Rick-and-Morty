import React, { useState } from "react";
import imageRickMorty from "./img/rick-morty.png";
import Characters from "./components/Characters";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();

    setCharacters(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {/* Cuando el useState character tenga algo, que no este en null, que cargue el componente character : y cuando no que cargue la imagen y el butto */}
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img
              src={imageRickMorty}
              alt="Rick & Morti"
              className="img-home"
            ></img>
            <button onClick={reqApi} className="btn-search">
              Buscar Personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
