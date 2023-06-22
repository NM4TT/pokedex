import './styles.css'
import { PokemonCard } from '../PokemonCard'

const PokemonList = ({pokemons}) => {
  return (
    <div id="PokemonList">
      <section className="PokemonCard-Container">
        {pokemons.map((pokemon) => {
          return <PokemonCard 
            key={pokemon.name} 
            name={pokemon.name} 
            url={pokemon.sprites.front_default}
            types={pokemon.types} 
          />})}
      </section>
    </div>
  )
}

export {PokemonList} 