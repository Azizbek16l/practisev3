import SidebarLeft from "../Sidebar/SidebarLeft"
import Header from "../Header/Header"
import SidebarRight from "../Sidebar/SidebarRight"

function Home() {
  return (
    <div className="home-body">
      <Header/>
      <SidebarLeft/>
      <main>
        <div className="main-img">
        <img src="./main.png" />
        </div>
      </main>
    <SidebarRight/>
    </div>
  )
}

export default Home