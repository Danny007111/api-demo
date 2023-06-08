import React from "react";
import GenerateButton from "../components/GenerateButton"
import Title from "../components/Title"
import PokemonCover from "../components/PokemonCover"


function App() {
  return (
    <div>
      <Title />
      <PokemonCover/>
      <GenerateButton />
      
    </div>
  );
}

export default App;
