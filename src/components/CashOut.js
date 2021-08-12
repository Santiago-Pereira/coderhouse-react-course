import React, { useState, useContext, useEffect, useParams } from 'react';
import {Form, Button} from 'react-bootstrap';
import firebase from "firebase/app";
import 'firebase/firestore';
import {getFirestore} from '../firebase';
import { cartContext } from "./Context";

const CashOut = () => {
 const {clear, cart} = useContext(cartContext);
 const [loading, setLoading] = useState(false);
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [adress, setAdress] = useState("");
 const [phone, setPhone] = useState("");
 const [orderId, setOrderId] = useState();
 const [error, setError] = useState();


  
 
  const db = getFirestore();
  const orders = db.collection("buyer-info");
  const total = cart.reduce((accum, item) => (accum += item.Item.price * item.quantity), 0);
  const newOrder = {
   buyer: {name, email, adress, phone},
   items: cart,
   date: firebase.firestore.Timestamp.fromDate(new Date()),
   total: total
  };
  const handleSubmit = (e) => {
   e.preventDefault();
   setLoading(true);
  orders.add(newOrder).then(({id}) =>{
   setOrderId(id);
   clear(cart); 
  }).catch(err => {
   setError(err);
  }).finally(() => {
   setLoading(false);
  })
  };
  
  return (
  <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-2" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" value={name} placeholder="Enter your complete Name..." required onChange={(e) => setName(e.target.value)}  />
  </Form.Group>

  <Form.Group className="mb-2" controlId="formBasicEmail">
    <Form.Label>Email Adress</Form.Label>
    <Form.Control type="email" value={email} placeholder="Enter your email adress here..." required onChange={(e) => setEmail(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-2" controlId="formBasicAdress">
    <Form.Label>Adress</Form.Label>
    <Form.Control type="text" value={adress} placeholder="Enter your adress here..." required onChange={(e) => setAdress(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-2" controlId="formBasicPhone">
    <Form.Label>Phone number</Form.Label>
    <Form.Control type="phone" value={phone} placeholder="Enter your number here..." required onChange={(e) => setPhone(e.target.value)} />
  </Form.Group>


  <Button variant="success" type="submit">Submit</Button>
  
 </Form>
  )

 
  }
export default CashOut;