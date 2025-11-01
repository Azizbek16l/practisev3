
// header.jsx
import { RiNotificationLine } from "react-icons/ri";
import './Header.css'
function Header() {
  return (
    <header>
        <div class="container">
            <div className='img-box'>
                <img src="https://static.tildacdn.one/tild3432-3930-4437-a537-613839623733/tild6463-6663-4161-a.png" alt=""/>
            </div>
                <ul className="nav-header">
                <li id="fire-nav" className="border-nav">🔥</li>
                <li id="coin-nav" className="border-nav">🪙189</li>
                <li id="lightning-nav" className="border-nav">⚡0</li>
                <li id="follow-nav">Obuna Bo'ling</li>
                <li id="notification-nav"><RiNotificationLine/></li>
                <li id="profile-user-nav"><img src="https://i.ibb.co/jvBGDzkz/Background.png" alt="Background" border="0"/></li>
                </ul>
            
        </div>
    </header>
  )
}

export default Header