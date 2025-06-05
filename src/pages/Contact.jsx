import React from 'react'

const Contact = () => {
  return (
    <section class="bg-white" style={{height:"90vh"}}>
      <div class="d-flex flex-column text-center mt-4">
        <h1 class="display-2 text-warning">CONTACT US</h1>
        <p class="text-secondary fs-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, excepturi.</p>
        <p class="fs-2 text-secondary fw-bold">Got Question ?</p>
        <p class="fw-bold text-secondary">Stay Connected</p>
        <form class="mx-auto pt-1" style={{height:"300px" , width:"300px" }}>
          <div class="d-flex flex-column align-item-center justify-content-center" >
            <label class="text-start  text-secondary ms-2 ">name</label>
            <input type="text" />
          </div>
          <div class="d-flex flex-column">
            <label class="text-start text-secondary ms-2 ">email</label>
            <input type="text"/>
          </div>
          <div class="d-flex flex-column">
            <label class="text-start text-secondary ms-2 ">message</label>
            <textarea rows="3"></textarea>
          </div>
          <button class="btn btn-warning mt-1">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
