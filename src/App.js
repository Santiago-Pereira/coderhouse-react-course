import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { ContextProvider } from "./components/Context";
import Cart from "./components/Cart";
import CashOut from './components/CashOut';



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

         <Route exact path='/CashOut'> 
            <CashOut/>
         </Route>

      </Switch>

     </Router>

     </ContextProvider>

  );
}

export default App;
