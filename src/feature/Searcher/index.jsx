import './styles.css'
import React from 'react'
import { InputSearch } from './components/InputSearch'
import { PokemonList } from "./components/PokemonList";

const Searcher = ({pokemons}) => {
  return (
    <div id="Pokedex-Searcher">
        
        <section className="InputSearch-Container">
          <InputSearch />
        </section>

        <section className="PokemonList-Container">
          <PokemonList pokemons={pokemons}/>
        </section>

    </div>
  )
}

export {Searcher}