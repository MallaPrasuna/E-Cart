import React from 'react'
import "./Cart.scss"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useSelector} from 'react-redux'

import { useDispatch } from 'react-redux';
import { remove , reset } from '../Components/Redux/CartSlice';

const Cart = ({theme}) => {
    
 const prod = useSelector(state => state.cart.products)
    const dispatch = useDispatch()
  
    const totalPrice =()=>{
        let total=0;
        prod.map(item=>total+=item.quantity * item.price)
        return total.toFixed(2)
        
    }

  return (
    <div className={theme ? "darkk cart" : "cart"}>
        <h1>Products in your Cart</h1>
        {
            prod.map(item => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <div className='price'>
                            {item.quantity} x {item.price}
                         </div>
                    </div>
                    <DeleteOutlineIcon className='delete' onClick ={()=>dispatch(remove({
                        id:item.id
                    }))} />
                </div>
            )

            )
        }
        <div className="total">
            <span>SUBTOTAL : </span>
            <span>INR : {totalPrice()}</span>
        </div>
       <button>Proceed to Checkout</button>
        <div className="reset" onClick={()=>dispatch(reset())}>RESET CART </div>

    </div>
  )
}

export default Cart