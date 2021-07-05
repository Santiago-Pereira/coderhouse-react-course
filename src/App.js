import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemCount from './components/itemCount';
import ContainerFunction from './components/ItemListContainer';
import ItemDetails from './components/ItemDetailContainer';



function App() {
  return (
    <Router>
        <NavBar/>
        <ContainerFunction/>
        <ItemDetails/>
        <ItemCount initial={1} stock={10} onAdd={() => console.log('agregado')}/>
        <Switch>
          <Route path='/pages/Home'>

          </Route>
        </Switch>
     </Router>

  );
}

export default App;
