import React from 'react';
import Card from 'react-bootstrap/Card';
import ItemCount from './itemCount';



function ItemDetail({ProductDetails}) {
 console.log(ProductDetails, 'ProductDetails');
 return(
   <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src={ProductDetails.image} />
   <Card.Body>
     <Card.Title>{ProductDetails.name}</Card.Title>
     <Card.Text>
     {ProductDetails.description}
     </Card.Text>
      price: $ {ProductDetails.price}
     <ItemCount initial={1} stock={10} onAdd={() => console.log('agregado')}/>
   </Card.Body>
  </Card>
  )

}
export default ItemDetail;