import { useEffect, useState } from "react"

function Tarnija2() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      fetch("https://api.escuelajs.co/api/v1/products")
        .then(res => res.json()) 
        .then(json => setProducts(json))
      }, []);
  
    if (products.length === 0) {
      return <div>Loading...</div>
    }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product title</th>
            <th>Product price</th>
            <th>Product description</th>
            <th>Product category</th>
            <th>Product image</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => 
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{product.category.name}</td>
              <td><img src={product.images} alt="" style={{ width: "80px" }} /></td>
            </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default Tarnija2