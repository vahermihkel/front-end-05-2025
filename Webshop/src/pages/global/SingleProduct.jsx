import { useParams } from 'react-router-dom'
import productsFromFile from '../../data/products.json'

function SingleProduct() {
  const {productName} = useParams();
  const found = productsFromFile.find(product => product.title === productName)

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




