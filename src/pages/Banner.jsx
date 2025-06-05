import React from 'react'

const Banner = () => {
  return (
    <div class="bg-info d-flex flex-column text-center justify-content-center" style={{height:"90vh"}}>
      <h1 class=" display-2 text-white fw-bold" ><span class="text-warning fw-light">REACT</span> PURE BOOTSTRAP</h1>
      <h1 class=" display-2 text-white fw-bold ">WEBSITE</h1>
      <h4 class="text-white fw-light my-3">Lorem ipsum dolor sit amet consectetur.</h4>
      <div class="my-2">
        <a href="#"><button class=" btn btn-warning mx-2 btn-lg">SUBMIT</button></a>
        <a href="#"><button class="btn btn-danger mx-2 btn-lg">SUBMIT</button></a>
      </div>
    </div>
  )
}

export default Banner
