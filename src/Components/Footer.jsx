import React from 'react'

import "./Footer.scss"

const Footer = () => {

  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Children</span>
          <span>Shoes</span>
          <span>New Arrivals</span>

        </div>
        <div className="item">
          <h1>
            Links
          </h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>

        </div>
        <div className="item">
          <h1 >About</h1>
          <span className='just'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            
          </span>
        </div>
        <div className="item">
          <h1>
             Contact
          </h1>
          <span className='just' >
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
          
          </span>
        </div>

      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>STORE </span>
          <span className='copyright'>
          © Copyright 2023  All rights reserved 
          </span>
        </div>
        <div className="right">
        <img  src="https://t4.ftcdn.net/jpg/04/06/75/39/360_F_406753914_SFSBhjhp6kbHblNiUFZ1MXHcuEKe7e7P.jpg" alt ="payment"/>
      </div>
      </div>
    </div>
  )
}

export default Footer