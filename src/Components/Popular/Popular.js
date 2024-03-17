import React from 'react'
import styles from './Popular.module.css'
import dataProduct from '../../Assets/data'

import { Item } from '../Item/Item'

export const Popular = () => {
  return (
    <div className={styles.popular}>
        <h1>POPULAR IN WOMEN</h1>
        <hr/>
        <div className={styles['popular-item']}>
            {
                dataProduct.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })
            }
        </div>
    </div>
  )
}
