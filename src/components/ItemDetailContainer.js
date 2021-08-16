
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {getFirestore} from '../firebase';




function ItemDetailContainer() {
    const [items, setItems] = useState({})  
    const [loading, setLoading] = useState(false);
    const {id} = useParams();
      useEffect(() => {
        const db = getFirestore()
      
        const itemCollection = db.collection("muebles");
        const item = itemCollection.doc(id);
        item.get().then((doc) => {
            if (!doc.exists){  
                console.log('Este producto no existe');
                return;
            }
            console.log('producto encontrado!');
            setItems({id: doc.id, ...doc.data()});  
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


export default ItemDetailContainer;