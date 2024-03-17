import React, { createContext, useState } from 'react'
import allProducts from '../../Assets/all_product'

export const ShopContext = createContext(null);


const getDefaultCart= ()=>{
    let cart={};
    
    for(let i=1; i < allProducts.length+1;i++){
        cart[i]=0;
    }
    return cart;
}

const ShopContextProvider=(props)=>{

    const [cartItem, setCartItem] = useState(getDefaultCart());


    const addToCart = (ItemId)=>{
        setCartItem((prev)=>({...prev, [ItemId]:prev[ItemId]+1}))

    }

  
    const removeToCart = (ItemId)=>{
        setCartItem((prev)=>({...prev, [ItemId]:prev[ItemId]-1}))
    }

    const getTotalCartAmount =()=>{
        let totalAmount = 0;
        for(const item in cartItem){
           
            if(cartItem[item]>0){
                let itemInfo = allProducts.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.new_price * cartItem[item];
               
            }
            
        }
        return totalAmount;
    }

    const getTotalCartItems = ()=>{
        let totalItem = 0;
        for(const item in cartItem){
           
            if(cartItem[item]>0){
              
                totalItem += cartItem[item] ;
               
            }
            
        }
        return totalItem;
    }

    const contextValue={getTotalCartAmount,getTotalCartItems,allProducts, cartItem, addToCart,removeToCart};
    return(
        <ShopContext.Provider value={contextValue}>
                    {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;