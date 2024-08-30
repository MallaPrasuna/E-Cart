import React from 'react'
import "./Categories.scss"
import {Link} from "react-router-dom"

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="https://images.unsplash.com/photo-1552664199-fd31f7431a55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNsb3RoaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt=""/>
                <Link className="link" to="/products/:id" >
                <button>
                    Sale
                </button>
                </Link>
            </div>
            <div className="row">
                <img src="https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="" />
                <Link className="link" to="/products/:id" >
                <button>
                    Shoe
                </button>
                </Link>
            </div>
        </div>
        <div className="col">
        <div className="row">
        <img src="https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmclMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
        <Link className="link" to="/products/:id" >
                <button>
                    New Season
                </button>
                </Link>
        </div>
        </div>

        <div className="col col-l">
        <div className="row">
        <div className="col">
        <div className="row">
        <img src="https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60" alt="" />
                <Link className="link" to="/products/:id" >
                <button>
                    Men
                </button>
                </Link>
        </div>


        </div>
<div className="col">
    <div className="row"> 
    <img src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWNjZXNzb3J5fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="" />
    <Link className="link" to="/products/:id" >
                <button>
                    Acessories
                </button>
                </Link>
    </div>
</div>
</div>
<div className="row">
<img src="https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFjY2Vzc29yeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
<Link className="link" to="/products/:id" >
                <button>
                    Handbag
                </button>
                </Link>
</div>
        

        </div>

    </div>
  )
}

export default Categories