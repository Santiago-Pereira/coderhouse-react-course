
import React, {useEffect, useState} from 'react';
import ItemDetail from './ItemDetail';


const productDetail = {
 name: 'camera',
 image: 'https://picsum.photos/id/250/200/300',
 price: 200,
 description: 'ksjfkshfhsdjhfjds sfjhsjfhjsd ksnfjkhsjfhs'
}

function ItemDetailContainer() {
 const [ProductDetails, setProductDetails] = useState({})


useEffect(() => {
 new Promise ((resolve, reject) => {
      setTimeout(() => resolve (productDetail), 2000)
}).then((res) => setProductDetails(res))
}, [])

return(
<div> <ItemDetail ProductDetails={ProductDetails}/> </div>
)

}

export default ItemDetailContainer;