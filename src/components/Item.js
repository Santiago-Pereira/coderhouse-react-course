import React from "react";
import {CardGroup, Card} from 'react-bootstrap';
import container from './ItemListContainer';


function Item({id, title, description, price, image}) {
       return(
        <CardGroup>
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <div className='card-price'>${price}</div>
          </Card.Body>
        </Card>
      </CardGroup>
       )
}
export default Item;