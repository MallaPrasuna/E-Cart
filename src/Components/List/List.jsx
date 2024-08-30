import React, { useState, useEffect } from 'react';
import './List.scss';
import { Link } from 'react-router-dom';

const List = ({ maxPrice, sortBy, categories }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Filter products based on maxPrice
    const filtered = data.filter((item) => item.newprice <= maxPrice);

    // Filter products based on selected categories
    const filteredByCategories = categories.length > 0
      ? filtered.filter((item) => categories.includes(item.title))
      : filtered;

    // Sort products based on sortBy
    let sortedProducts = [...filteredByCategories];

    if (sortBy === 'asc') {
      sortedProducts.sort((a, b) => a.newprice - b.newprice);
    } else if (sortBy === 'desc') {
      sortedProducts.sort((a, b) => b.newprice - a.newprice);
    }

    setFilteredProducts(sortedProducts);
  }, [maxPrice, sortBy, categories]);
    const data =[
        {
            id:1,
            title: "Shoes",
            img:"https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto-compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto-compress&cs-tinysrgb&w=1600",
            Isnew:true,
            oldprice:800,
            newprice:700
        },
        {
            id:2,
            title:"Shirt",
            img:"https://images.unsplash.com/photo-1568000177948-a557664a465e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1885&q=80",
            img2:"https://images.unsplash.com/photo-1567719367005-f4a24fcc8794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
            Isnew:true,
            oldprice:999,
            newprice:850
        },
        {
            id:3,
            title:"T-Shirt",
            img:"https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
            img2:"https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
            Isnew:false,
            oldprice:600,
            newprice:500
        },
        {
            id:4,
            title:"Hoodie",
            img:"https://images.unsplash.com/photo-1554568218-ffd1e72a2151?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
            img2:"https://images.unsplash.com/photo-1554568218-9a456cea00cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
            Isnew:false,
            oldprice:999,
            newprice:900
        },
        {
            id:5,
            title: "T-Shirt",
            img:"https://images.unsplash.com/photo-1550427913-38b595369689?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
            img2: "https://images.unsplash.com/photo-1568380931895-8c4fe76225a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
            Isnew:true,
            oldprice:900,
            newprice:700
        },
        {
            id:6,
            title:"Hoodie",
            img:"https://images.unsplash.com/photo-1615397587950-3cbb55f95b77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
            img2:"https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
            Isnew:true,
            oldprice:888,
            newprice:800
        },
        {
            id:7,
            title:"Long Sleeve",
            img:"https://images.unsplash.com/photo-1615233500351-1fa6ed14754c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
            img2:"https://images.unsplash.com/photo-1615233500379-44bceeb78d39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
            Isnew:false,
            oldprice:999,
            newprice:880
        },
        {
            id:8,
            title:"Denim",
            img:"https://images.unsplash.com/photo-1519235106638-30cc49b5dbc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1536&q=80",
            img2:"https://images.unsplash.com/photo-1519235014485-3a25f3ce0b30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
            Isnew:false,
            oldprice:889,
            newprice:750
        }


        
    ]
    return (
        <div className="list">
          {filteredProducts.map((item) => (
            <Link className="link" to={`/Product/:${item.id}`} key={item.id}>
              <div className="card">
                <div className="image">
                  {item.Isnew && <span>New Season</span>}
                  <img src={item.img} alt="" className="mainImg" />
                  <img src={item.img2} alt="" className="secondImg" />
                </div>
                <h2>{item.title}</h2>
                <div className="price">
                  <h3>INR: {item.oldprice} /-</h3>
                  <h3>INR : {item.newprice}/-</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      );
    };
    
    export default List;
    
    
    
    
    
    