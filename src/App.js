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



function App() {

  
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

      </Switch>

     </Router>

     </ContextProvider>

  );
}

export default App;
