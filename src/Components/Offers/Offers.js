import React from 'react'
import styles from './Offers.module.css'

import exclusiveImage from '../../Assets/exclusive_image.png'

export const Offers = () => {
  return (
    <div className={styles.offers}>
        <div  className={styles['offers-left']}>
            <h1>Exclusive</h1>
            <h1>Offers for You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>

        <div className={styles['offers-right']}>
                <img src={exclusiveImage}/>
        </div>
    </div>
  )
}
