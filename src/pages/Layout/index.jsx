import { Outlet } from "react-router-dom"
import { Logo } from "./Logo"

const Layout = () => {
    return (
      <main className="App">
        <Logo />
        <Outlet />
      </main>
    )
}
  
export {Layout}