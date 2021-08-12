import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from "./Context";

export default function Cart() {
 const {clear, cart, removeItem} = useContext(cartContext);
 const totalPrice = cart.reduce((accu, curr) => accu + curr.Item.price * curr.quantity, 0);
 if (totalPrice === 0 ) {
  return  <div>
          <h2>No hay productos en el carro...</h2>
          <br/>
        <Link to="/"> <button>Ver los productos disponibles</button></Link> 
          </div>
 }
  
 
  return (
   <div>
    {cart.map(element => {
     return(
      <div>
       <h1>{element.Item.title} (Quantity: {element.quantity})</h1>
       <h2>{(element.Item.price * element.quantity)}</h2>
       <button onClick={() => removeItem(element.Item.id)}>eliminar item del carro</button>
      </div>
     )
    })}
    <p>Total price: ${totalPrice}</p>
    <button onClick={() => clear()}>elimina todos los productos del carro</button>
    <Link to="CashOut"> <button> Ir a la seccion de confirmar compra </button> </Link>
   </div>
  )
 
  
 
}
