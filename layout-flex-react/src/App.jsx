import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router , Routes , Route, Link , } from 'react-router-dom'
import Footer from './components/Footer'
import LayoutHome from './components/LayoutHome'
import NavBar from './components/Nav'
import  About  from './pages/About'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <NavBar/>
  
   <Routes>
      <Route path='/' element={<LayoutHome />} />
      <Route path="About" element={<About />} />
    </Routes>

   <Footer/> 
   </>
  )
}

export default App
