import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import LayoutHome from './components/LayoutHome'
import NavBar from './components/Nav'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <NavBar/>
   <LayoutHome/>
   <Footer/> 
   </>
  )
}

export default App
