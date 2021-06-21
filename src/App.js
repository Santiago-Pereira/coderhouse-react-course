import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemList from './components/ItemListContainer';
import ItemCount from './components/itemCount';


function App() {
  return (
    <div>
        <NavBar/>
        <ItemList/>
        <ItemCount initial={1} stock={10} onAdd={() => console.log('agregado')}/>
    
    </div>
    
    
    
  );
}

export default App;
