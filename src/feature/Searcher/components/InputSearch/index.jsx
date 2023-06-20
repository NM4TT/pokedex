import './styles.css'
import { Input } from "antd"

const InputSearch = () => {
  return (
      <Input.Search className='MainSearchBar' placeholder="Buscar..." />
  )
}

export {InputSearch}