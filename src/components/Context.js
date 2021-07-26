import { createContext, useState } from "react";


export const cartContext = createContext();
export const ContextProvider = ({children}) => {

 const [cart, setCart] = useState([]);

const addItem = (Item, quantity) => {
  if(isInCart(Item.id)) {console.log('ya se encuentra en el carro')} 
  else{setCart([...cart,{Item, quantity}])}
}

const removeItem = (id) => {
 const newArray = cart.filter(element => element.Item.id !== id )
 setCart(newArray)
}

const clear = () => {
 setCart([])
}

const isInCart = (id) => {
   return cart.find(element => element.Item.id === id )
   

   
}




 return (
  <cartContext.Provider value={{addItem, removeItem, clear, cart}}>
      {children}
  </cartContext.Provider>

 )
}