import React from 'react'
import './cards.css';


const Cards = () => {
  return (
    <div>
        <div class="header">
    <h1>Reliable, efficient delivery</h1>
    <h1>Powered by Technology</h1>

    <p>Our Artificial Intelligence powered tools use millions of project data points
      to ensure that your project is successful</p>
  </div>
  <div class="row1-container">
    <div class="box box-down cyan">
      <h2>Petrol</h2>
      <p>Monitors activity to identify project roadblocks</p>
      
      <img  src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />

      <button>Click</button>
    </div>

    <div class="box red">
      <h2>Mobile</h2>
      <p>Scans our talent network to create the optimal team for your project</p>
      <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt=""/>
    </div>

    <div class="box box-down blue">
      <h2>Cars and Motosycle</h2>
      <p>Uses data from past projects to provide better delivery estimates</p>
      <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt=""/>
    </div>
  </div>
  <div class="row2-container">
    <div class="box orange">
      <h2>Olive Oil</h2>
      <p>Regularly evaluates our talent to ensure quality</p>
      <img src="https://assets.codepen.io/2301174/icon-karma.svg" alt=""/>
    </div>
  </div>
  <footer>
    <p class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="#">Moath M AlMAdhoun</a>.
    </p>
  </footer>
    </div>
  )
}

export default Cards