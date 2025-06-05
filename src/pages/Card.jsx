import React from 'react'
import twitter from "../assets/twitter.png"
import facebook from "../assets/facebook.png"
import youtube from "../assets/youtube.png"


const Card = (props) => {
  return (
    <div class="d-flex flex-column rounded-2 bg-white" style={{height:"400px" , width:"350px"}}>
      <img src={props.image} alt="img " height="250px"/>
      <h1 class="text-start text-secondary ms-1">{props.name}</h1>
      <p class="text-start ms-1 text-secondary">Lorem ipsum dolor sit amet.</p>
      <div class="d-flex justify-content-between ">
        <a href="#"><button class="btn btn-info ms-1 text-white">Info</button></a>
        <div class="me-1">
            <a href="#" class="mx-1"><img src={youtube} alt= "image2" height="30px"/></a>
            <a href="#" class="mx-1"><img src={twitter} alt= "image2" height="30px"/></a>
            <a href="#" class="mx-1"><img src={facebook} alt= "image2" height="30px"/></a>
        </div>
      </div>
    </div>
  )
}

export default Card
