
import React, {useEffect, useState} from 'react';
import Details from './ItemDetail';


const productDetail = {
 name: 'camera',
 image: 'https://picsum.photos/id/250/200/300',
 price: 200,
 description: 'ksjfkshfhsdjhfjds sfjhsjfhjsd ksnfjkhsjfhs'
}

function ItemDetails() {
 const [ProductDetails, setProductDetails] = useState({})


useEffect(() => {
 new Promise ((resolve, reject) => {
      setTimeout(() => resolve (productDetail), 2000)
}).then((res) => setProductDetails(res))
}, [])

return(
<div> <Details ProductDetails={ProductDetails}/> </div>
)

}

export default ItemDetails;