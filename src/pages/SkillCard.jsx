import React from 'react'

const SkillCard = (props) => {
  return (
    <section class="bg-secondary rounded-4" style={{height:"300px" ,width:"300px" ,border:"1px solid black"}}>
        <div class="p-3">
            <img src={props.image} alt ="skill" height="60px" />
            <p class="text-white fs-3 fw-bold">{props.name}</p>
            <p class="text-white">{props.info}</p>
            <span ><a href="#" class="text-primary fw-bold mb-2 text-end">more</a></span>
        </div>
    </section>
  )
}

export default SkillCard
