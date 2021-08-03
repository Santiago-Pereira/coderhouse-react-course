import React, { useState, useContext} from 'react';
import Card from 'react-bootstrap/Card';
import ItemCount from './itemCount';
import { cartContext } from "./Context";
import { Link } from 'react-router-dom';




function ItemDetail({items}) {
  const {addItem} = useContext(cartContext);
  const [state, setState] = useState(false);
  
  function onAdd(quantityToAdd){
        setState(true)
        addItem(items, quantityToAdd)
    }
 return(
   <Card style={{ width: '18rem' }}>
   
   <Card.Body>
     <Card.Title>{items.title}</Card.Title>
     <Card.Text>
     {items.description}
     </Card.Text>
      price: $ {items.price}
      {state === false ?  <ItemCount initial={1} stock={10} onAdd={onAdd}/> :  <Link to='/Cart'><button onClick={() => setState(false)}>terminar mi compra</button></Link>}
   </Card.Body>
  </Card>
  )

}
export default ItemDetail;