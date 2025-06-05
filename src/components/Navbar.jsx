import React from 'react'
import A_icon from '../assets/a.png'
import Search from '../assets/search.png'

const Navbar = () => {
  return (
  <nav class="navbar navbar-expand-md bg-dark ">
    <div>
      <a class="navbar-brand d-flex flex-row mx-2 align-items-center " href="*"><img src={A_icon} alt="A" height="60px"/><p class="fs-2 text-danger text-uppercase fw-bold me-3 my-auto ">Ayush</p></a>
    </div>
      <div class="collapse navbar-collapse">
      <ul class='navbar-nav me-auto mb-2 '>
        <li class='nav-item mx-2'><a class="nav-link text-white fw-bold" href="/">HOME</a></li>
        <li class="nav-item mx-2"><a class="nav-link text-white fw-bold" href="/skill">SKILL</a></li>
        <li class="nav-item mx-2"><a class="nav-link text-white fw-bold" href="/project">PROJECTS</a></li>
        <li class="nav-item mx-2"><a class="nav-link text-white fw-bold" href="/team">TEAM</a></li>
        <li class="nav-item mx-2"><a class="nav-link text-white fw-bold" href="contact">CONTACT</a></li>
        <li class="nav-item mx-2"><a class="nav-link text-white fw-bold" href="/progress">PROGRESS</a></li>
      </ul> 
      <form class="form-inline bg-white mx-auto round-2 ">
        <input type="search" placeholder='Search' class="border-white outline-white ms-auto ps-2"/>
        <button class="border-white bg-light"><img src={Search} height="20px "/></button>
      </form>
    </div>
  </nav>
  )
}

export default Navbar
