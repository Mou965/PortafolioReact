import { useState } from 'react'
import './App.css'
import Contac from './components/contact/Contact'
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
      <Home />
      <NavBar toggle={toggle}/>
      <Sidebar toggle={toggle} isOpen={isOpen}/>
      <Contact />
    </div>
  )
}

export default App
