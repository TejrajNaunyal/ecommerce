import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
const Navbar = () => {
  const [menu,setMenu]=useState("shop")
  const {getDefaultCartAmount}= useContext(ShopContext)
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='Logo'/>
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
      <li onClick={()=>{setMenu("shop")}}><Link  style={{textDecoration:'none'}} to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mens")}}> <Link  style={{textDecoration:'none'}} to='/mens'>Men</Link>  {menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}> <Link style={{textDecoration:'none'}} to='/womens'>Women</Link> {menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kid</Link> {menu==="kids"?<hr/>:<></>}</li>
        </ul>
      <div className="nav-logo-cart">
       <Link to='/login'><button className='nav-login-cart-button'>Login</button></Link> 
       <Link to='/cart'><img src={cart_icon} alt="Cart Icon" /></Link> 
        <div className="nav-cart-count">{getDefaultCartAmount()}</div>
      </div>
    </div>
  );
}

export default Navbar;
