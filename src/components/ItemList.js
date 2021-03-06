
import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import Item from "./Item";



function ItemList({muebles}) {
 console.log(muebles, 'muebles');
 return(
  <Container>
    <Row>
      <Col className="col-12 col-sm-12 col-md-4 col-lg-4">
      {muebles.map((item, key)=> <Item key={key} id={item.id} title={item.title} description={item.description} price={item.price} image={item.image} /> )}
      </Col>
   </Row>
  </Container>
 )

}
export default ItemList;