import React, {useEffect, useState} from 'react';
import ItemList from './ItemList';



const productos = [{id:1, title: 'mesa', description:'dsfdsfdsf', price:20, image: 'https://picsum.photos/200'},
                   {id:2, title: 'silla', description:'sdfdsfsd', price:30, image:'https://picsum.photos/200'},  
                   {id:3, title: 'sillon', description:'dfsfsdfsf', price:40, image: 'https://picsum.photos/200'}];






  const ContainerFunction = () =>{

  const [muebles, setMuebles] = useState([])

useEffect(() => {
  new Promise ((resolve, reject) => {
    setTimeout(resolve(productos),3000)
  }).then(
    function (productosResolve) {
      setMuebles(productosResolve)
    }
  )
})
  return(
    <div><ItemList muebles={muebles}/></div>
  )
}

export default ContainerFunction;