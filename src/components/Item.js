import React from "react";
import { Card, Button} from 'react-bootstrap';
import {Link} from "react-router-dom"



function Item({id, title, description, price, image}) {
       return(
        <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className='text-center'>{title}</Card.Title>
          <Card.Text className='text-center'>{description}</Card.Text>
          <div className='card-price text-center'>Price: ${price}</div>
          <Card.Text className='text-center'>  <Link to={`/item/${id}`}> <Button variant="primary">Ver detalles</Button> </Link> </Card.Text>
        </Card.Body>
      </Card>
       )
}
export default Item;

