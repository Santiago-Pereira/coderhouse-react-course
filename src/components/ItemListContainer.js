import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import {getFirestore} from '../firebase';

  const ItemListContainer = () =>{
    const [loading, setLoading] = useState(false);
    const [muebles, setMuebles] = useState([]);
    const {category} = useParams();
    const [categoryEmpty,  setCategoryEmpty] = useState([]);
    const [isEmpty, setIsEmpty] = useState([])
    
    useEffect(() => {
      const db = getFirestore();
      const items = db.collection('muebles').orderBy('price', 'asc');
      items
        .get()
        .then((querySnapshot) => {
          setLoading(false);
          const itemFilter = () => {
            const data = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            const filterCategory = data.filter(
              (item) => item.category === category
            );
            if (!category) {
              setMuebles(data);
              setCategoryEmpty(false);
            } else {
              if (filterCategory.length > 0) {
                setMuebles(filterCategory);
                setCategoryEmpty(false);
              } else {
                setCategoryEmpty(true);
              }
            }
          };
          if (querySnapshot.size === 0) {
            setIsEmpty(true);
            setCategoryEmpty(false);
          } else {
            setIsEmpty(false);
            itemFilter(category);
          }
        })
        .catch((error) => console.log('Firestore error:', error));
    }, [category]);
 
    /* useEffect(() => {
       setLoading(true);
       const db = getFirestore()
       const itemCollection = db.collection("muebles");
       const categoryCollection = itemCollection.where('category', '==', `${category}`);
       categoryCollection.get().then((querySnapshot) =>{
          if(querySnapshot.size === 0){
             console.log('no results');
          }else {
            setMuebles(querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
          }
       }).catch(error => {
          console.log('error', error);
       }).finally(() => {
          setLoading(false);
       })
    }, [category]);

    useEffect(() => {
      setLoading(true);
      const db = getFirestore()
      const itemCollection = db.collection("muebles").orderBy('price', 'asc');
      itemCollection.get().then((querySnapshot) =>{
         if(querySnapshot.size === 0){
            console.log('no results');
         }else {
          setMuebles(querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
         }
      }).catch(error => {
         console.log('error', error);
      }).finally(() => {
         setLoading(false);
      })
   }, []); */
    return(
      <div><ItemList muebles={muebles}/></div>
    )
    console.log('ssssssss', muebles);

 /*  const [muebles, setMuebles] = useState([])
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
  ) */
}

export default ItemListContainer;