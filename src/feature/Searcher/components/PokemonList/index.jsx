import './styles.css'
import { PokemonCard } from '../PokemonCard'

const PokemonList = ({pokemons}) => {
  return (
    <div id="PokemonList">
      <section className="PokemonCard-Container">
        {pokemons.map((pokemon) => {return <PokemonCard name={pokemon.name} url={pokemon.url} />})}
      </section>
    </div>
  )
}

export {PokemonList} 