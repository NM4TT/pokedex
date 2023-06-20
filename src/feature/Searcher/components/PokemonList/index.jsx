import './styles.css'
import { PokemonCard } from '../PokemonCard'

const PokemonList = ({pokemons}) => {
  return (
    <div id="PokemonList">
      <section className="PokemonCard-Container">
        {pokemons.map((pokemon) => {return <PokemonCard />})}
      </section>
    </div>
  )
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''),
}

export {PokemonList} 