import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
import Theme from './components/Theme'

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Theme/>
      <Routes>
        <Route index element = {<Home />} />     
        <Route path='about' element = {<About />} />     
        <Route path='projects' element = {<Projects />} />     
        <Route path='contact' element = {<Contact />} />         
      </Routes>
    </BrowserRouter>
  )
}

export default App
