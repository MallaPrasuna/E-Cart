import React, {  useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

import { useDispatch } from 'react-redux';
import { add } from '../../Components/Redux/CartSlice';

const Product = () => {
  const currentUrl = window.location.href;
  let arr = currentUrl.split(":")
  const dispatch = useDispatch()
  

  const data =[
    {
        id:1,
        title: "Shoes",
        img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto-compress&cs=tinysrgb&w=1600",
        img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto-compress&cs-tinysrgb&w=1600",
        Isnew:true,
        tag:"shoe,Women",
        oldprice:800,
        newprice:700
    },
    {
        id:2,
        title:"Shirt",
        img:"https://images.unsplash.com/photo-1568000177948-a557664a465e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1885&q=80",
        img2:"https://images.unsplash.com/photo-1567719367005-f4a24fcc8794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        Isnew:true,
        tag:"shirt,Women",
        oldprice:999,
        newprice:850
    },
    {
        id:3,
        title:"T-Shirt",
        img:"https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        img2:"https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        Isnew:false,
        tag:"t-shirt,Men",
        oldprice:600,
        newprice:500
    },
    {
        id:4,
        title:"SweatShirt",
        img:"https://images.unsplash.com/photo-1554568218-ffd1e72a2151?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        img2:"https://images.unsplash.com/photo-1554568218-9a456cea00cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        Isnew:false,
        tag:"sweatShirt,men",
        oldprice:999,
        newprice:900
    },
    {
        id:5,
        title: "Tshirt",
        img:"https://images.unsplash.com/photo-1550427913-38b595369689?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        img2: "https://images.unsplash.com/photo-1568380931895-8c4fe76225a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        Isnew:true,
        tag:"t-shirt,Men",
        oldprice:900,
        newprice:700
    },
    {
        id:6,
        title:"Hoodie",
        img:"https://images.unsplash.com/photo-1615397587950-3cbb55f95b77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        img2:"https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        Isnew:true,
        tag:"Hoodie,Unisex",
        oldprice:888,
        newprice:800
    },
    {
        id:7,
        title:"Long Sleeve",
        img:"https://images.unsplash.com/photo-1615233500351-1fa6ed14754c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        img2:"https://images.unsplash.com/photo-1615233500379-44bceeb78d39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        Isnew:false,
        tag:"coat,women",
        oldprice:999,
        newprice:880
    },
    {
        id:8,
        title:"Denim",
        img:"https://images.unsplash.com/photo-1519235106638-30cc49b5dbc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1536&q=80",
        img2:"https://images.unsplash.com/photo-1519235014485-3a25f3ce0b30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        Isnew:false,
        tag:"Jeans,women",
        oldprice:889,
        newprice:750
    }


    
]

      const foundItem = data.find(item => item.id === Number(arr[arr.length-1]));
      
  
  
  const [quantity,setQuantity] = useState(1)
  const [selected , setSelected] = useState(0)
  const images = [
    foundItem.img , foundItem.img2
  ]

  return (
    <div className='product'>
      <div className='left'>
        <div className='images'>
        <img src={images[0]} alt="" onClick={e=>setSelected(0)}/>
          <img src={images[1]} alt="" onClick={e=>setSelected(1)}/>
        </div>
        <div className="mainImg">
          <img src={images[selected]} alt=""/>
        </div>
      </div>
      <div className="right" >
      <h1>{foundItem.title}</h1>
        <span className='price'>INR : {foundItem.newprice}/-</span>
        <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
        </p>
        <div className='quantity'>
          <button onClick={()=> setQuantity((prev)=>(prev===0 ? 0 : prev-1))}>-</button>
          {quantity}
          <button onClick={()=> setQuantity((prev)=> prev+1)}>+</button>
        </div>
        <button
      className='add'
      onClick={() =>
        dispatch(
          add({
            id: foundItem.id,
            img: foundItem.img,
            title: foundItem.title,
            price: foundItem.newprice,
            quantity,
          })
        )
      }
    >
    <AddShoppingCartIcon/>  Add to Cart
    </button>
        <div className='links'>
          <div className="item">
              <FavoriteBorderIcon/> ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon/> ADD TO COMPARE
          </div>
          </div>
          <div className="info">
            <span> Vendor: Rare Rabbit</span>
            <span>product-type : {foundItem.title}</span>
            <span>TAG : {foundItem.tag}</span>
          </div>
          <hr/>
          <div className="details">
            <span>description</span>
            <hr/>
            <span>ADDITIONAL INFORMATION</span>
            <hr/>
            <span>FAQ</span>
          </div>
        
      </div>
    </div>
  )
}

export default Product