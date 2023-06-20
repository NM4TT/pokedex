import { Card } from "antd"
import { PokemonImage } from "../PokemonImage";
import Meta from "antd/es/card/Meta";
import { AiOutlineStar } from 'react-icons/ai'

const PokemonCard = () => {
  return (
    <Card
      className="PokemonCard"
      title="Ditto"
      cover={<PokemonImage src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="Ditto" />}
      extra={<AiOutlineStar />}
    >
      <Meta description="fire, magic" />
    </Card>
  )
}

export {PokemonCard}