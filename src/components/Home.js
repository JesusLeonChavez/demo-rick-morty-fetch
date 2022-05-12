import React from 'react';
import { useState } from 'react';

//components
import Characters from "./Characters"

//images
import imageRickMorty from "../img/rick-morty.png"

const Home = () => {
    const [characters, setCharacters] = useState(null);

    const reqApi = async () => {
        const api = await fetch('https://rickandmortyapi.com/api/character');
        const characterApi = await api.json();
    
        setCharacters(characterApi.results);
      }

    return (
        <div className="App">
            <header className="App-header">
                <h1 className="title">Rick & Morty</h1>
                {characters ? (
                    <Characters characters={characters} setCharacters={setCharacters}/>
                ) : (
                <>
                    <img src={imageRickMorty} alt="rick and morty" className="img-home"/>
                    <button onClick={reqApi} className="btn-search">Search Character</button>
                </>
                )}
            </header>
        </div>
    )
}

export default Home