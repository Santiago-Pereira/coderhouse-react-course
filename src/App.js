import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemCount from './components/itemCount';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemDetail from './components/ItemDetail';



function App() {
  return (
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
             <ItemDetail/>
        </Route>


        <Route path='/pages/Home'>
             <ItemCount initial={1} stock={10} onAdd={() => console.log('agregado')}/>
        </Route>

      </Switch>

     </Router>

  );
}

export default App;
