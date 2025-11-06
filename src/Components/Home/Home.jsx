import SidebarLeft from "../Sidebar/SidebarLeft"
import Header from "../Header/Header"
import SidebarRight from "../Sidebar/SidebarRight"
import Shop from "../Shop/Shop"

function Home() {
  return (
    <div className="home-body">
      <Header/>
      <SidebarLeft/>
      {/* <main>
        <div className="main-img">
        <img src="./main.png" />
        </div>
      </main> */}
      <Shop/>
      
    
    </div>
  )
}

export default Home