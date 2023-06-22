import './logo.css'
import logo from '../../static/logo.svg'
const Logo = () => {
  return (
        <span id='Logo-Container'>
            <img src={logo} alt='logo' />
        </span>
  )
}

export {Logo}