import { useEffect, useState } from "react"

function Tarnija3() {
  const [products, setProducts] = useState([]);
  const [leht, setLeht] = useState(1);
//products.map is not a function --> mul ei tule Array API otspunktilt

// setter uuendab iga kord HTMLi.
// nüüd tahan, et useEffect läheks ka käima kui useState muutuja muutub setteri abiga
  useEffect(() => {
    fetch("https://api.itbook.store/1.0/search/react?page=" + leht)
      .then(res => res.json()) 
      .then(json => setProducts(json.books)) // võtan objektilt võtmega Array väärtuse
    }, [leht]); // <-- kui muudan, siis läheb useEffect uuesti käima (hetkel teeb uue raamatute päringu)

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
            <th>Product image</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => 
            <tr key={product.isbn13}>
              <td>{product.isbn13}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.subtitle}</td>
              <td><img src={product.image} alt="" style={{ width: "80px" }} /></td>
            </tr>)}
        </tbody>
      </table>
      <button onClick={() => setLeht(leht - 1)}>Eelmine</button>
      <span>{leht}</span>
      <button onClick={() => setLeht(leht + 1)}>Järgmine</button>
    </div>
  )
}

export default Tarnija3