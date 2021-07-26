import React, { useState, useContext} from 'react';
import Card from 'react-bootstrap/Card';
import ItemCount from './itemCount';
import { cartContext } from "./Context";
import { Link } from 'react-router-dom';




function ItemDetail({ProductDetails}) {
  const {addItem} = useContext(cartContext);
  const [state, setState] = useState(false)
  
  function onAdd(quantityToAdd){
        setState(true)
        addItem(ProductDetails, quantityToAdd)
    }
 return(
   <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src={ProductDetails.image} />
   <Card.Body>
     <Card.Title>{ProductDetails.name}</Card.Title>
     <Card.Text>
     {ProductDetails.description}
     </Card.Text>
      price: $ {ProductDetails.price}
      {state === false ?  <ItemCount initial={1} stock={10} onAdd={onAdd}/> :  <Link to='/Cart'><button onClick={() => setState(false)}>terminar mi compra</button></Link>}
   </Card.Body>
  </Card>
  )

}
export default ItemDetail;