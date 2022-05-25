import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import LayoutHome from './components/LayoutHome'
import NavBar from './components/Nav'
import Teams from './components/Teams'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <NavBar/>
   <LayoutHome/>
   <Teams/>
   <Footer/> 
   </>
  )
}

export default App
