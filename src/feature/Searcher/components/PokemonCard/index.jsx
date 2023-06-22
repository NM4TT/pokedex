import { Card } from "antd"
import { PokemonImage } from "../PokemonImage";
import Meta from "antd/es/card/Meta";
import { AiOutlineStar } from 'react-icons/ai'

const PokemonCard = ({name,url}) => {
  return (
    <Card
      className="PokemonCard"
      title={name}
      cover={<PokemonImage src={url} alt={name} />}
      extra={<AiOutlineStar />}
    >
      <Meta description="fire, magic" />
    </Card>
  )
}

export {PokemonCard}