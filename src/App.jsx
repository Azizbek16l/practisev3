import './App.css'
import Home from './Components/Home/Home'
import Shop from './Components/Shop/Shop'
import NotFound from './Components/NotFound/NotFound'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home/>}>
          <Route path='/shop' element={<Shop/>}/>          
        </Route>        
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App