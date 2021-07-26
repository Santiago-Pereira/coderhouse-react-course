import Badge from 'react-bootstrap/Badge'
import {FaShoppingCart} from 'react-icons/fa';
import React, { useContext} from 'react';
import { cartContext } from "./Context";

function CartWidget(greeting) {
  const {cart} = useContext(cartContext);
  return(
    <div>
    <Badge/>{cart.length}
  <FaShoppingCart/>
  </div>
  )
}

export default CartWidget;