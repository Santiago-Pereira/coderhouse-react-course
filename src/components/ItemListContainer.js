import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';



const productos = [{id:1, title: 'mesa', description:'dsfdsfdsf', price:20, image: 'https://picsum.photos/200', category:'tables'},
                   {id:2, title: 'silla', description:'sdfdsfsd', price:30, image:'https://picsum.photos/200' , category:'chairs'},  
                   {id:3, title: 'mesa 2', description:'dfsfsdfsf', price:40, image: 'https://picsum.photos/200', category:'tables'},
                   {id:4, title: 'silla 2', description:'dfsfsdfsf', price:25, image: 'https://picsum.photos/200', category:'chairs'}];






  const ItemListContainer = () =>{

  const [muebles, setMuebles] = useState([])
  const {category} = useParams();

useEffect(() => {
  new Promise ((resolve, reject) => {
    setTimeout(resolve(productos),3000)
  }).then(
    function (productosResolve) {
      const productosFiltrados = productosResolve.filter(e => e.category === category)
      !category ? setMuebles(productosResolve) :  setMuebles(productosFiltrados) 
        
      
      
    }
  )
},[category])
  return(
    <div><ItemList muebles={muebles}/></div>
  )
}

export default ItemListContainer;