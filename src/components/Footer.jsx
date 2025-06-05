import React from 'react'
import whatsapp from "../assets/whatsapp.png"
import facebook from "../assets/facebook.png"
import instagram from "../assets/instagram.png"

const Footer = () => {
  return (
    <div class="text-center bg-secondary p-2">
      <h1 class="text-white">PURE BOOTSTRAP PROJECT</h1>
      <h3 class="text-white">Lorem ipsum dolor sit.</h3>
      <div>
        <a href="#" class="mx-2"><img src={whatsapp} alt="whatsapp" height="30px"/></a>
        <a href="#" class="mx-2"><img src={instagram} alt="instagram" height="30px"/></a>
        <a href="#" class="mx-2"><img src={facebook} alt="facebook" height="30px"/></a>
      </div>
      <p class="fw-bold mt-2">@ Copyright 2025 - Ayush</p>

    </div>
  )
}

export default Footer
