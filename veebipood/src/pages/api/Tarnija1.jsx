import { useEffect, useState } from "react"

function Tarnija1() {
  // kui on API otspunktist andmete võtmine, siis pean sulgude sisse panema
  // algväärtuseks tühja väärtuse (mitte tühjuse)
  // tühjus: = useState()     = useState(undefined)     =useState(null)
  // tühi väärtus:  kui võtan Array'd:   = useState([])
  //                kui võtan Objekti:   = useState({})
  //                kui võtan Stringi:   = useState("")
  const [products, setProducts] = useState([]);
  // senikaua kuni võtab API otspunktist, on algväärtus

  // https://fakestoreapi.com/products
  // uef + enter ---> useEffectist import
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json()) // metaandmetega tagastus
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
            <th>Product rating</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => 
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td><img src={product.image} alt="" style={{ width: "80px" }} /></td>
              <td>Rating {product.rating.rate} ({product.rating.count} ratings)</td>
            </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default Tarnija1