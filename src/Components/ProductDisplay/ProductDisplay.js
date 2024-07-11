import React, { useContext, useEffect, useState } from 'react'
import styles from './ProductDisplay.module.css'
import starIcon from '../../Assets/star_icon.png'
import starDullIcon from '../../Assets/star_dull_icon.png'
import { ShopContext } from '../Context/ShopContext'
import { motion } from 'framer-motion'


export const ProductDisplay = (props) => {
    const {addToCart}=useContext(ShopContext);
    const {product}=props;
   


  return (
    <div className={styles.productdisplay}>
        
        <div className={styles['productdisplay-left']}>
            <div className={styles['productdisplay-img-list']}>
            
                <img src={product.image}/>
                <img src={product.image}/>
                <img src={product.image}/>
                <img src={product.image}/>
            </div>
            <div className={styles['productdisplay-img']}>
            <motion.img
            initial={{opacity:0, scale:2 }}
            animate={{opacity:1,scale:1}}
            transition={
              {type:'spring',  damping:10, stiffness:120}
             }
            className={styles['productdisplay-main-img']} src={product.image}/>
        </div>
        </div>

        <div className={styles['productdisplay-right']}>
            <motion.h1
             initial={{ opacity: 0, y: -50 }}
             animate={{opacity:1,y:0}}
             transition={
               {type:'spring', delay:0.4, damping:10, stiffness:120}
              }
            >{product.name}</motion.h1>
            <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{opacity:1,x:0}}
             transition={
               {type:'spring', delay:0.4, damping:10, stiffness:120}
              }
            className={styles['productdisplay-right-star']}>
                <img src={starIcon}/>
                <img src={starIcon}/>
                <img src={starIcon}/>
                <img src={starIcon}/>
                <img src={starDullIcon}/>
                <p>(122)</p>
                </motion.div>
        <div className={styles['productdisplay-right-prices']}>
            <div className={styles['productdisplay-right-price-old']}>
                ${product.old_price}
            </div>
            <div className={styles['productdisplay-right-price-new']}>
                ${product.new_price}
            </div>

        </div>
        <div className={styles['productdisplay-right-description']}>
            A lightweight, usually knitted, pullover shirt, close-fitting and round neck and short sleeves, worn as an undershirt or outer shirt. 
        </div>
        <div className={styles['productdisplay-right-size']}>
            <h1>Select Size</h1>
            <div className={styles['productdisplay-right-sizes']}>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XX</div>
            </div>
            
        </div>
        <motion.button 
        whileHover={{scale: 1.1, rotateX: 10, rotateY: -10 ,
            transition: { type: 'spring', stiffness: 300, damping: 20, duration: 0.2 }}}
        onClick={()=>{addToCart(product.id)}}>ADD TO CART</motion.button>
        <p className={styles['productdisplay-right-category']}>
            <span>Category :</span>Women, T-shirt, Crop Top
        </p>
        <p className={styles['productdisplay-right-category']}>
            <span>Tags :</span>Modern Latest</p>
    </div>

    </div>
  )
}
