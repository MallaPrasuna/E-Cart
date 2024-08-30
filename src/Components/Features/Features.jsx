import React from 'react'
import "./Features.scss"
import Card from '../Card/Card'


const Features = ({type}) => {


    const data =[
        {
            id:1,
            title: "Shoes",
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto-compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto-compress&cs-tinysrgb&w=1600",
            Isnew:true,
            oldprice:800,
            newprice:500
        },
        {
            id:2,
            title:"Shirt",
            img:"https://images.unsplash.com/photo-1568000177948-a557664a465e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1885&q=80",
            img2:"https://images.unsplash.com/photo-1567719367005-f4a24fcc8794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
            Isnew:true,
            oldprice:900,
            newprice:820
        },
        {
            id:3,
            title:"T-Shirt",
            img:"https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
            img2:"https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
            Isnew:false,
            oldprice:600,
            newprice:500
        }

        
    ]
  return (
    <div className='features'>
        <div className="top">
        <h1>{type} Products</h1>
        <p>
        it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
        </p>
    </div>
    <div className="bottom">
        {
            data.map(item=>(
                <Card item={item} key={item.id}/>
            ))
        }
    </div>
    </div>
  )
}

export default Features