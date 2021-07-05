import React from 'react';
import Card from 'react-bootstrap/Card';



function Details({ProductDetails}) {
 console.log(ProductDetails, 'ProductDetails');
 return(
   <Card style={{ width: '18rem' }}>
   <Card.Img variant="top" src={ProductDetails.image} />
   <Card.Body>
     <Card.Title>{ProductDetails.name}</Card.Title>
     <Card.Text>
     {ProductDetails.description}
     </Card.Text>
     camera price: $ {ProductDetails.price}
   </Card.Body>
  </Card>
  )

}
export default Details;