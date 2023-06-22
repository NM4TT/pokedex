import { useEffect } from 'react';
import { Searcher } from "../../feature/Searcher"
import { getPokemon, getPokemonDetails } from '../../api';
import { setPokemons } from '../../actions/index'
import { useSelector, useDispatch } from 'react-redux';
import { allPokemons } from '../../reducers/pokemons';

const HomePage = () => {

    const pokemons = useSelector(allPokemons);
    const dispatch = useDispatch();

    useEffect(() => {
      const fetchPokemons = async () => {
        const pokemonList = await getPokemon();
        const pokemonDetails = await Promise.all(
          pokemonList.map(pokemon => getPokemonDetails(pokemon))
        );
        dispatch(setPokemons(pokemonDetails));
      };
      fetchPokemons();
    }, []);

    return (
        <div id="Home">
            <Searcher pokemons={pokemons} />
        </div>
    )
}

export {HomePage};