import { useState } from 'react'
import './App.css'
import Contact from './components/contact/Contact'
import Home from './components/home/Home'
import NavBar from './components/navBar/NavBar'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="App">
      <NavBar toggle={toggle}/>
      <Sidebar toggle={toggle} isOpen={isOpen}/>
      <Home />
      <Contact/>
  
    </div>
  )
}

export default App
