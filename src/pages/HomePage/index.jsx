import { useEffect, useState } from 'react';
import { Searcher } from "../../feature/Searcher"
import { getPokemon } from '../../api';


const HomePage = () => {

    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
      const fetchPokemons = async () => {
        const pokemonList = await getPokemon();
        setPokemons(pokemonList);
      };
      fetchPokemons();
    }, []);

    return (
        <div id="Home">
            <Searcher pokemons={pokemons} />
        </div>
    )
}

export {HomePage}