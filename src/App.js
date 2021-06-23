import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemCount from './components/itemCount';
import ContainerFunction from './components/ItemListContainer'


function App() {
  return (
    <div>
        <NavBar/>
        <ContainerFunction/>
        <ItemCount initial={1} stock={10} onAdd={() => console.log('agregado')}/>
        
    
    </div>
    
    
    
  );
}

export default App;
