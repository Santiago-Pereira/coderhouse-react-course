import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from "./Context";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';


export default function Cart() {
 const {clear, cart, removeItem} = useContext(cartContext);
 const totalPrice = cart.reduce((accu, curr) => accu + curr.Item.price * curr.quantity, 0);
 if (totalPrice === 0 ) {
  return  <div>
          <h2>No hay productos en el carro...</h2>
          <br/>
        <Link to="/"> <Button variant="primary">Ver los productos disponibles</Button></Link> 
          </div>
 }
  
 
  return (
   <div>
    {cart.map(element => {
     return(
      <Container>
        <Row className="no-gutters">
          <Col className="col-5 col-sm-5 col-md-4 col-lg-2">
        <Card className="card-left">
        <Card.Img variant="top" src={element.Item.image} className="left" />
        <Card.Body>
          <Card.Title className='text-center'>{element.Item.title}</Card.Title>
          <Card.Text className='text-center'>(Quantity: {element.quantity})</Card.Text>
          <div className='card-price text-center'>Price: ${(element.Item.price * element.quantity)}</div>
        <Button variant="danger" onClick={() => removeItem(element.Item.id)}>eliminar item del carro</Button>
        </Card.Body>
        </Card>
        </Col>
        </Row>
        </Container>

     )
    })}
   
    
    <Card>
    <Row>
      <Card.Body>
      <Col className="col-12 col-sm-12 col-md-12 col-lg-12">
        <Card.Title className="text-center">Total price: ${totalPrice} </Card.Title>
        </Col>
        <Col className="col-12 col-sm-12 col-md-12 col-lg-12">
           <Card.Text className='text-center'><Link to="CashOut"> <Button className="btn-success"> Ir a la seccion de confirmar compra </Button > </Link></Card.Text>
           </Col>
       <Col className="col-12 col-sm-12 col-md-12 col-lg-12">
           <Card.Text className='text-center'>  <Button className="btn-danger" onClick={() => clear()}>elimina todos los productos del carro</Button> </Card.Text>
           </Col>
      </Card.Body>
      </Row>
    </Card>
    
    
    
   </div>
  )
 
  
 
}
