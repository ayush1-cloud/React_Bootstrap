import React from 'react'
import SkillCard from './SkillCard'
import skillData from '../assets/skill'

const Skills = () => {
  return (
   <section>
     <div class="text-center d-flex flex-column " style={{height:"90vh"}}>
      <h1 class="display-2 text-warning">Skills</h1>
      <p class="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      <a href="#" class="text-info">Learn More</a>
      <div class=" d-flex justify-content-around mt-3">
      {
        skillData.map((item, i)=>{
          return <SkillCard key ={i} image={item.image} name={item.name} info={item.info}/>
        })
      }
    </div>
    </div>
    
   </section>
  )
}

export default Skills
