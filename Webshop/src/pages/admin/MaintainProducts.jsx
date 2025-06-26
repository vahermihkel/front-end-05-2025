import { useState, useRef } from "react";
import productsFromFile from "../../data/products.json";
import { Link } from "react-router-dom";
import AdminHome from "./AdminHome";
import { toast } from "react-toastify";

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile.slice());
  const searchRef = useRef();

  const deleteProduct = (index) => {
    const updatedProducts = products.slice();
    const deletedProduct = updatedProducts[index]?.title || "Product";
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
    toast.error(`${deletedProduct} deleted!`);
  };

  const search = () => {
    const keyword = searchRef.current.value.toLowerCase();

    if (keyword === "") {
      setProducts(productsFromFile.slice());
      return;
    }

    const result = products.filter((product) =>
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
