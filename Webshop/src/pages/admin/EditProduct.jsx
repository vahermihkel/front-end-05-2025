
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useEffect, useRef, useState } from "react"

function EditProduct() {
  const [products, setProducts] = useState([]); 
  const { index } = useParams();
  const found = products[index];
  const idRef = useRef();
  const titleRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const ratingRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();
  const productsUrl = "https://mihkel-05-2025-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  const categoriesUrl = "https://mihkel-05-2025-default-rtdb.europe-west1.firebasedatabase.app/categories.json";
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(categoriesUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []))
  }, []);

  useEffect(() => {
    fetch(productsUrl)
      .then(res => res.json())
      .then(json => setProducts(json || []))
  }, []);

  const edit = () => {
    products[index] =  {
      "id": Number(idRef.current.value),
      "title": titleRef.current.value, 
      "price": Number(priceRef.current.value),
      "image": imageRef.current.value,
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "rating": Number(ratingRef.current.value),
      "active": activeRef.current.checked
    };
    fetch(productsUrl, {method: "PUT", body: JSON.stringify(products)})
      .then(() => navigate("/admin/maintain-products"));
  }

// navigeerimiseks/URL vahetuseks:
// <Link to=""    HTML ---> suunamiseks Reacti siseselt (App.jsx sees selline path="" olemas)
// <a href=""     HTML ---> suunamiseks Reactist välja (teeb refreshi)

// navigate + useNavigate()  JS ---> suunamiseks Reacti siseselt (App.jsx sees selline path="" olemas)
// window.location.href=     JS ---> suunamiseks Reactist välja (teeb refreshi)

  if (!found) {
    return (
      <div>
        ❌ Product not found. <br />
        Please go back to <Link to="/admin/maintain-products">Maintain Products</Link>.
      </div>
    );
  }

  return (
    <div>
      <label>ID</label> <br />
      <input ref={idRef}  type="text" defaultValue={found.id} /> <br />
      <label>Title</label> <br />
      <input ref={titleRef}  type="text" defaultValue={found.title}/> <br />
      <label>Price</label> <br />
      <input ref={priceRef}  type="number" defaultValue={found.price} /> <br />
      <label>Image</label> <br />
      <input ref={imageRef}  type="text"defaultValue={found.image} /> <br />
      <label>Description</label> <br />
      <input ref={descriptionRef}  type="text" defaultValue={found.description}/> <br />
      <label>Category</label> <br />
      {/* <input ref={categoryRef}  type="text" defaultValue={found.category}/> <br /> */}
      <select ref={categoryRef} defaultValue={found.category.toLowerCase()}>
        {categories.map(category => <option key={category.name} value={category.name.toLowerCase()}>{category.name}</option>)}
      </select> <br />
      <label>Rating</label> <br />
      <input ref={ratingRef}  type="number" defaultValue={found.rating} step="0.1" min="0" max="5" /> <br />
      <label>Active</label> <br />
      <input ref={activeRef} type="checkbox" defaultChecked={found.active} /> <br />
      <button onClick={edit}>Save</button>
    </div>
  )
}

export default EditProduct

