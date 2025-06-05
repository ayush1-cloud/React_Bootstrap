import React from 'react'
import Card from './Card.jsx'
import details from '../assets/data.js'

const Team = () => {
  return (
    <section>
      <div class="d-flex flex-column text-center  bg-secondary">
        <h1 class="display-2 text-warning">TEAM</h1>
        <p class="fs-3 text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cum repellendus neque.</p>
        <div class="d-flex justify-content-around">
          {
            details.map((item ,index)=>(
              <Card key={index} name ={item.name} image={item.image} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Team
