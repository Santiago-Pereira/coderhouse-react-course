
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {getFirestore} from '../firebase';




function ItemDetailContainer() {
    const [items, setItems] = useState({})  // Le cambié [] por {}
    const [loading, setLoading] = useState(false);
    const {id} = useParams();
      useEffect(() => {
        const db = getFirestore()
      
        const itemCollection = db.collection("muebles");
        const item = itemCollection.doc(id);
        item.get().then((doc) => {
            if (!doc.exists){  // Le saqué el signo de exclamación
                console.log('Este producto no existe');
                return;
            }
            console.log('producto encontrado!');
            setItems({id: doc.id, ...doc.data()});  // Le borré el [0]
        }).catch(( error) => {
            console.log('error al encontrar el producto', error);
        }).finally(() =>{
            setLoading(false);
        });
       
      }, [id])
      
      return(
        <div> <ItemDetail items={items}/> </div>
        ) 
		}
 /* const [ProductDetails, setProductDetails] = useState({})
 const {id} = useParams();


useEffect(() => {
 new Promise ((resolve, reject) => {
      setTimeout(() => resolve (productos), 2000)
}).then((productos) => productos.filter(element => element.id === id ? setProductDetails(element) : console.log('producto no encontrado')))
}, [id])

return(
<div> <ItemDetail ProductDetails={ProductDetails}/> </div>
) */



export default ItemDetailContainer;