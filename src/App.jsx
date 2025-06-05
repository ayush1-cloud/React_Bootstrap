import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import {BrowserRouter  as Router,Routes,Route} from "react-router-dom"
import Banner from "./pages/Banner"
import Contact from './pages/Contact'
import Progress from './pages/Progress'
import Project from './pages/Project'
import Skills from './pages/Skills'
import Team from './pages/Team'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Banner/>}/>
        <Route path="/skill" element={<Skills/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/progress" element={<Progress/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
