import React from "react";
import "./App.css"
import GenerateButton from "../components/GenerateButton"
import Title from "../components/Title"
import PokemonCover from "../components/PokemonCover"

function App() {
  return (
    <div className="App">
      <Title />
      <PokemonCover/>
      <GenerateButton />
      
    </div>
  );
}

export default App;