import React from 'react'
import image2 from "../assets/p2.jpg" 
import image3 from "../assets/p3.jpg"

const Project = () => {
  return (
    <section class="bg-light d-flex " style={{height:"90vh" ,width:"98vw"}}>
      <div class="text-center" style={{width:"50%"}} >
        <h1 class="display-2 text-dark fw-bold text-start ms-5 mb-0" style={{marginBottom:"0px"}}>Our </h1>
        <h1 class="display-2 text-dark fw-bold text-start ms-5 mt-0 mb-0 "style={{marginBottom:"0px", marginTop:"0px"}}>Signature</h1>
        <h1 class="display-2 text-dark fw-bold text-start ms-5 mt-0" style={{marginTop:"0px"}}>Projects</h1>
        <p class="fs-4 text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quaerat eaque dolor, autem facilis maxime adipisci excepturi in quisquam illum!</p>
        <img src={image3} alt ="image" height="100px" width="350px" class='mt-5 rounded-4 float-start ms-5'/>
      </div>
      <div style={{width:"50%"}}>
        <img src={image2} alt ="image" height="500px" width="600px" class="rounded-4 mt-4 ms-5"/>
      </div>
    </section>
  )
}

export default Project
