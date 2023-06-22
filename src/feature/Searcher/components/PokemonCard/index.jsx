import { Card } from "antd"
import { PokemonImage } from "../PokemonImage";
import Meta from "antd/es/card/Meta";
import { AiOutlineStar } from 'react-icons/ai'

const PokemonCard = ({name,url, types}) => {
  console.log(types)
  return (
    <Card
      className="PokemonCard"
      title={name}
      cover={<PokemonImage src={url} alt={name} />}
      extra={<AiOutlineStar />}
    >
      <Meta description={types.map(slot => {return slot.type.name })} />
    </Card>
  )
}

export {PokemonCard}