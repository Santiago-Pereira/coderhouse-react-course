import React, {useState} from "react";



const ItemCount = ({stock: initialStock, initial, onAdd}) => {
 
     const [count, setCount] = useState(initial)
     const [stock, setStock] = useState(initialStock)

     const addCount = () => {
      if (stock > 1){
       setCount(count + 1)
       setStock(stock - 1)
        
      }
      else{
       alert('no hay stock suficiente');
      }
     }

     const subtractCount = () => {
      if (count > 1){
       setCount(count - 1)
       setStock(stock + 1)
        
      }
      else{
       alert('no se puede seleccionar menos de 1');
      }
     }


     return (
          <div>
               <button className='boton-style' onClick={addCount}>+</button>
               {count}
               <button className='boton-style' onClick={subtractCount} min="1">-</button>

               <button className='boton-add-style' onClick={onAdd}> Agregar al carro </button>
          </div>
     )
}

export default ItemCount;