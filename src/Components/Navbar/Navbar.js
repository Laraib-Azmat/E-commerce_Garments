import React, { useContext, useState } from 'react'
import styles from './Navbar.module.css';

import logo from '../../Assets/logo.png';
import cartIcon from '../../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

export const Navbar = () => {

   const [menu, setMenu]=useState('shop');
   const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className={styles.navbar}>

<div className={styles['nav-logo']}>
    <img src={logo} alt="logo" />
    <p>SHOPPER</p>
</div>

<ul className={styles['nav-menu']}>
    <li onClick={()=>setMenu("shop")}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
    <li onClick={()=>setMenu("men")}><Link style={{textDecoration:'none'}} to='mens'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
    <li onClick={()=>setMenu("women")}><Link style={{textDecoration:'none'}} to='womens'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
    <li onClick={()=>setMenu("kids")}><Link style={{textDecoration:'none'}} to='kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
</ul>

<div className={styles['nav-login-cart']}>
<Link to='/login'><button>Login</button></Link>
<Link to='cart'><img src={cartIcon} alt="cart-icon" /></Link>
<div className={styles['nav-cart-count']}>{getTotalCartItems()}</div>

</div>

    </div>
  )
}
