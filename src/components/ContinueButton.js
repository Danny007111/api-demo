import React, {useState} from "react";
import PokemonCover from "./PokemonCover";
import pokeball from "./images/pokeball.jpg"
// There is currently 1281 pokemon based on this API as of 6/14/23

// Returns a random integer from 1 to 10:
// Math.floor(Math.random() * 10) + 1;

const ContinueButton = () => {
    const [srcImgs, setSrcImgs] = useState([pokeball])
    console.log(srcImgs)
    function handleRandomPokemon() {
        let RandomPokemon = Math.floor(Math.random() * 1281) + 1;

        // pokemon api
        fetch(`https://pokeapi.co/api/v2/pokemon/${RandomPokemon}`)
        .then(response => response.json())
        .then(data => {
            setSrcImgs(data.sprites.front_default);
            console.log(srcImgs)
        })
    };


    return (
        <div >
            <PokemonCover srcImg={srcImgs} />
            <button type="button" onClick={handleRandomPokemon}>Continue</button>
        </div>
    );
};

export default ContinueButton