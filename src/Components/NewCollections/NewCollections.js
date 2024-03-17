import React from 'react'
import styles from './NewCollections.module.css'
import { HashRouter } from 'react-router-dom'
import newCollections from '../../Assets/new_collections'
import { Item } from '../Item/Item'

export const NewCollections = () => {
  return (
    <div className={styles.newCollection}>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className={styles.collections}>
            {
                newCollections.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                } )
            }
        </div>
    </div>
  )
}
