
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';


const productos = [{id:'1', title: 'mesa', description:'checking', price:20, image: 'https://picsum.photos/200', category:'tables'},
                   {id:'2', title: 'silla', description:'sdfdsfsd', price:30, image:'https://picsum.photos/200' , category:'chairs'},  
                   {id:'3', title: 'mesa 2', description:'dfsfsdfsf', price:40, image: 'https://picsum.photos/200', category:'tables'},
                   {id:'4', title: 'silla 2', description:'dfsfsdfsf', price:25, image: 'https://picsum.photos/200', category:'chairs'}];


function ItemDetailContainer() {
 const [ProductDetails, setProductDetails] = useState({})
 const {id} = useParams();


useEffect(() => {
 new Promise ((resolve, reject) => {
      setTimeout(() => resolve (productos), 2000)
}).then((productos) => productos.filter(element => element.id === id ? setProductDetails(element) : console.log('producto no encontrado')))
}, [id])

return(
<div> <ItemDetail ProductDetails={ProductDetails}/> </div>
)

}

export default ItemDetailContainer;