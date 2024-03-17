import React, { useContext } from 'react'
import styles from './ShopCategory.module.css'
import dropdownIcon from '../../Assets/dropdown_icon.png'
import { ShopContext } from '../Context/ShopContext';
import { Item } from '../Item/Item';

export const ShopCategory = (props) => {

  const contextValue= useContext(ShopContext);

  return (
    <div className={styles['shop-category']}>
       <img className={styles['shopcategory-banner']} src={props.banner} />
       <div className={styles['shopcategory-indexSort']}>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className={styles['shopcategory-sort']}>
          Sort by <img src={dropdownIcon}/>
        </div>  
       </div>
        <div className={styles['shopcategory-products']}>
          {contextValue.allProducts.map((item,i)=>{
            if(props.category===item.category){
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
            }
            else{
              return null;
            }
          })}

        </div>

              <div className={styles['shopcategory-loadmore']}>
                Explore more
              </div>
    </div>
  )
}
