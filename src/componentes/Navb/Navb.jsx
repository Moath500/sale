import React from 'react'
import logo from '../../images/logo.png'
import './Navb.css';
import { Button , InputGroup ,FormControl  } from 'react-bootstrap';
import 'antd/dist/antd.css';
import { Input, Space } from 'antd';

const { Search } = Input;
 const onSearch = () => {
     alert('search..');
 }
const Navb = () => {
  return (
    <nav className='nav'>
        
        <img src={logo}/>
       
        <input  className='search' placeholder='Search...' type='search'   > 
        </input>
    
        <div className='btns'>
        <span className='btn'>Log IN</span>
        <button className='btn'> Create Account</button>
        </div>
      
        
    </nav>

  )
}

export default Navb