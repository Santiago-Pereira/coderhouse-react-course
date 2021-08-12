import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemCount from './components/itemCount';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemDetail from './components/ItemDetail';
import { ContextProvider } from "./components/Context";
import Cart from "./components/Cart";
import {getFirestore} from './firebase';
import { useState, useEffect } from 'react';
import CashOut from './components/CashOut';



function App() {
  /*  const [loading, setLoading] = useState(false)
   const [muebles, setMuebles] = useState([]) */
  /*  const producto =  {title: 'sillas 8', description:'sdfdsfsd', price:57, category:'chairs'}  */
 

  /*  useEffect(() => {
      setLoading(true);
      const db = getFirestore()
      const itemCollection = db.collection("muebles")
      itemCollection.add(producto).then((querySnapshot) =>{
         if(querySnapshot.size === 0){
            console.log('no results');
         }else {
            setMuebles(querySnapshot.docs.map(doc => doc.data()))
         }
      }).catch(error => {
         console.log('error', error);
      }).finally(() => {
         setLoading(false);
      })
   }, []);
   console.log('ssssssss', muebles); */
  
  return (
    <ContextProvider>
    <Router>
        <NavBar/>

      <Switch>
        
        <Route exact path='/'>
            <ItemListContainer/>
         </Route>

         <Route path='/category/:category'>
            <ItemListContainer/>
         </Route>

         <Route path='/item/:id'>
            <ItemDetailContainer/>
         </Route>
       
        <Route path='/pages/productId'>
            
        </Route>


        <Route exact path='/Cart'> 
            <Cart/>
         </Route>

         <Route exact path='/CashOut'> 
            <CashOut/>
         </Route>

      </Switch>

     </Router>

     </ContextProvider>

  );
}

export default App;
