import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function SingleProduct() {
  const productsUrl = "https://mihkel-05-2025-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  const {productName} = useParams();
  const [products, setProducts] = useState([]); 
  const found = products.find(product => product.title === productName)

  useEffect(() => {
    fetch(productsUrl)
      .then(res => res.json())
      .then(json => setProducts(json || []))
  }, []);

  if (found === undefined) {
    return  <div>Product not found</div>
  }

  return (
    <div>
      <div>
        <div>{found.title}</div>
        <div>{found.price.toFixed(2)} €</div>
        <div><img style={{ width: "200px"}}  src= {found.image} alt={found.title}  /> </div>
        <div>{found.active ? "Product is active" : "Product is not active"} </div>    
      </div>
    </div>
  )
}

export default SingleProduct




