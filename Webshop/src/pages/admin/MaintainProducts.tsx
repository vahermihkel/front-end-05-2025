import { useState, useRef, useEffect } from "react";
// import productsFromFile from "../../data/products.json";
import { Link } from "react-router-dom";
import AdminHome from "./AdminHome.tsx";
import { toast } from "react-toastify";
import { Product } from "../../models/Product";

function MaintainProducts() {
  const [products, setProducts] = useState<Product[]>([]); // väljanäidatavad tooted. kõikuvas seisundis -> HTMLs
  const [dbProducts, setDbProducts] = useState<Product[]>([]); // andmebaasitooted. koguaeg samas seisus. varem productsFromFile
  const searchRef = useRef<HTMLInputElement>(null);
  const url = "https://mihkel-05-2025-default-rtdb.europe-west1.firebasedatabase.app/products.json";

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []);
        setDbProducts(json || []);
      })
  }, []);

  const deleteProduct = (index: number) => {
    dbProducts.splice(index, 1);
    setProducts(dbProducts.slice());
    toast.error(`Product deleted!`);
    fetch(url, {method: "PUT", body: JSON.stringify(dbProducts)})
  };

  const search = () => {
    if (searchRef.current === null) {
      return;
    }
    const keyword = searchRef.current.value.toLowerCase();

    const result = dbProducts.filter((product) =>
      product.title.toLowerCase().includes(keyword)
    );
    setProducts(result);
  };

  return (
    <div>
      <AdminHome />

      <label>Search product</label> <br />
      <input ref={searchRef} type="text" onChange={search} /> <br /> <br />

      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Product name</th>
            <th>Product price</th>
            <th>Product picture</th>
            <th>Description</th>
            <th>Category</th>
            <th>Product active</th>
            <th>Rating</th>
          
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={index}
              className={product.active ? "active-product" : "notactive-product"}
            >
              <td>{index}</td>
               <td>{product.title}</td>
               <td>{product.price.toFixed(2)} €</td>
              <td>{product.image && (
                  <img className="picture" src={product.image} alt="Product" />
                )}
              </td>
              <td>{product.description} </td>
              <td>{product.category} </td>
              
              <td>{product.active ? "✅" : "❌"}</td>
              
              <td>
                {typeof product.rating === "object"
                  ? product.rating.rate + " ★ (" + product.rating.count + ")"
                  : product.rating}
              </td>
            
              <td>
                <button onClick={() => deleteProduct(index)}>x</button>
              </td>
              <td>
                <Link to={"/admin/edit-product/" + index}>
                  <button>Edit</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MaintainProducts;
