import React from 'react'
import styles from './Hero.module.css'
import handIcon from '../../Assets/hand_icon.png'
import arrowIcon from '../../Assets/arrow.png'
import heroImg from '../../Assets/hero_image.png'

export const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles['hero-left']}>
           
           <h2>NEW ARRIVALS ONLY</h2>
           <div>
           <div className={styles['hero-hand-icon']}>
            <p>new</p>
            <img src={handIcon} />
           </div>
           <p>collections</p>
           <p>for everyone</p>
        </div>
        <div className={styles['hero-latest-btn']}>
              <div>Latest Collection</div>
              <img src={arrowIcon} />
        </div>

        </div>

        <div className={styles['hero-right']}>

            <img src={heroImg}/>

        </div>
    </div>
  )
}
