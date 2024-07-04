import React, { useContext, useRef, useState } from 'react'
import styles from './Navbar.module.css';
import logo from '../../Assets/logo.png';
import cartIcon from '../../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark , faBars} from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {

   const [menu, setMenu]=useState('shop');
   const {getTotalCartItems} = useContext(ShopContext);
   const menuRef = useRef();

   const showNavBar = ()=>{
    menuRef.current.classList.toggle(styles.responsiveNav)
   }

  return (
    <div className={styles.navbar}>

<div className={styles['nav-logo']}>
    <img src={logo} alt="logo" />
    <p>TrendyWear</p>
</div>

<ul ref={menuRef} className={styles['nav-menu']}>
    <li onClick={()=>{setMenu("shop");showNavBar()}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("men");showNavBar()}}><Link style={{textDecoration:'none'}} to='mens'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("women");showNavBar()}}><Link style={{textDecoration:'none'}} to='womens'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("kids");showNavBar()}}><Link style={{textDecoration:'none'}} to='kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
    <button className={`${styles.navBarBtn} ${styles.navBarClose}`} onClick={showNavBar}><FontAwesomeIcon icon={faXmark} /></button>
</ul>
 

<div className={styles.rightBar}>
<div className={styles['nav-login-cart']}>
<Link to='/login'><button>Login</button></Link>
<Link to='/cart'><img src={cartIcon} alt="cart-icon" /></Link>
<div className={styles['nav-cart-count']}>{getTotalCartItems()}</div>

</div>
 <button className={styles.navBarBtn} onClick={showNavBar}><FontAwesomeIcon icon={faBars} /></button>

</div>
    </div>
  )
}
