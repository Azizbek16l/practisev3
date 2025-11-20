import SidebarLeft from "../Sidebar/SidebarLeft"
import Header from "../Header/Header"
import { Outlet, useLocation } from "react-router-dom"
import Dashboard from "../Dashboard/Dashboard"

function Home() {
  const { pathname } = useLocation()

  return (
    <div className="home-container">
      <SidebarLeft />
      <div className="main-content">
        <Header />
        {pathname === '/' ? <Dashboard /> : <Outlet />}
      </div>
    </div>
  )
}

export default Home