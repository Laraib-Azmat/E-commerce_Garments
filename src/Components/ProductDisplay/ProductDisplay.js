import React, { useContext } from 'react'
import styles from './ProductDisplay.module.css'
import starIcon from '../../Assets/star_icon.png'
import starDullIcon from '../../Assets/star_dull_icon.png'
import { ShopContext } from '../Context/ShopContext'

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
            <img className={styles['productdisplay-main-img']} src={product.image}/>
        </div>
        </div>

        <div className={styles['productdisplay-right']}>
            <h1>{product.name}</h1>
            <div className={styles['productdisplay-right-star']}>
                <img src={starIcon}/>
                <img src={starIcon}/>
                <img src={starIcon}/>
                <img src={starIcon}/>
                <img src={starDullIcon}/>
                <p>(122)</p>
                </div>
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
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className={styles['productdisplay-right-category']}>
            <span>Category :</span>Women, T-shirt, Crop Top
        </p>
        <p className={styles['productdisplay-right-category']}>
            <span>Tags :</span>Modern Latest</p>
    </div>
    </div>
  )
}
