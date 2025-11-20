import { NavLink } from 'react-router-dom'
import './SidebarLeft.css'

function SidebarLeft() {
  return (
    <div id='SidebarLeft' >
    <ul>
        <li><NavLink to="/">🏡Asosiy</NavLink></li>
        <li><NavLink >📖Kurslarim</NavLink></li>
        <li><NavLink >🎥Eduverse</NavLink></li>
        <li><NavLink >⌨️MarsCode</NavLink></li>
        <li><NavLink >📰Blog</NavLink></li>
        <li><NavLink to="/shop">🛒Shop</NavLink></li>
    </ul>
    </div>
  )
}

export default SidebarLeft