import React, { useState } from 'react'
import "./Contact.scss"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
const Contact = () => {
  const [val,setVal] = useState("")
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>BE IN TOUCH WITH US!</span>
            <div className="mail">
                <input type='text'value={val} placeholder='Enter your e-mail..!' onChange={e=>setVal(e.target.value)}/>
                <button onClick={()=>setVal("")}>JOIN US</button>
            </div>
            <div className='icons'>
                <GoogleIcon/>
                <TwitterIcon/>
                <InstagramIcon/>
                <FacebookIcon/>
            </div>
        </div>
    </div>
  )
}

export default Contact