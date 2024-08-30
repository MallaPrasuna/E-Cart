import React from 'react'
import "./Card.scss"
import {Link} from "react-router-dom"

const Card = ({item}) => {
  return (
    <>
    <Link className='link' to={`/Product/:${item.id}`}>
    <div className='card'>
    <div className="image">
        {item.Isnew && <span>New Season</span>}
        <img src={item.img} alt="" className='mainImg'/>
        <img src={item.img2} alt="" className='secondImg'/>
            </div>

        <h2>{item.title}</h2>
        <div className="price">
            <h3>INR:  {item.oldprice} /-</h3>
            <h3>INR : {item.newprice}/-</h3>
        </div>
    </div>
    </Link>
    
    </>
  )
}

export default Card