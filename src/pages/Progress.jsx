import React from 'react'

const Progress = () => {
  return (
    <section  style={{height:"90vh",width:"90vw"}}>
      <div >
      <h1 class="display-2 text-warning text-center">Progess</h1>
      <p class="text-secondary text-center fs-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, eum?</p>
      <div class="row justify-content-center ">
        <div class="col-lg-6" text-secondary>
          <h2 class="text-secondary">HTML</h2>
          <div class="progress bg-secondary mb-3">
            <div class="progress-bar" style={{width:"50%"}}>50%</div>
          </div>
          <h2 class="text-secondary">CSS</h2>
            <div class="progress bg-secondary mb-3">
              <div class="progress-bar bg-danger " style={{width:"70%"}}>70%</div>
            </div>
            <h2 class="text-secondary">JAVASCRIPT</h2>
            <div class="progress bg-secondary mb-3">
              <div class="progress-bar bg-success" style={{width:"90%"}}>90%</div>
            </div>
            <h2 class="text-secondary">BOOTSTRAP</h2>
            <div class="progress bg-secondary mb-3">
              <div class="progress-bar bg-warning " style={{width:"95%"}}>95%</div>
            </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Progress
