import React from 'react'
import './styles.css'
import olive from '../../images/olive-oil.png';
import cars from '../../images/cars.png';
const index = (props) => {
  return (
     
  <div>

    <h1>Catagouries for Installment Sale </h1>
     
     <div className='container'>
    <div className='box box-down blue'>
        <h2>Cars</h2>
        <p>Follow up on the sale and installment of Cars and Motorcycle</p>
        <img src={cars}/>
       
        <button>Petrol </button>
    </div>

     
    <div className='box  cyan '>
         <h2>Mobiles</h2>
        <p>Follow up on the sale and installment of mobile phones</p>
      
        <img src="https://img.icons8.com/cotton/64/000000/touchscreen-smartphone--v2.png"/>
        <button>{props.name} </button>
    </div>

     
    <div className='box box-down orange'>
    <h2>Olive Oil</h2>
    <p>Follow up on the sale and installment of Olive Oil</p>
        <img src={olive}/>
        <button>Petrol </button>
    </div>
    </div>

    <div className='row2-container '>
    <div className='box  red'>
    <h2>Petrol</h2>
    <p>Follow up on the sale and installment of Petrol</p>
    <img src="https://img.icons8.com/cute-clipart/64/000000/gas-station.png"/>
        <button>Petrol </button>
    </div>
    </div>


    </div>

    
  )
}

export default index