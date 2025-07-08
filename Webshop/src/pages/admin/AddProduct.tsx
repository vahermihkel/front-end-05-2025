import { useEffect, useRef, useState } from "react"
// import productsFromFile from "../../data/products.json"
import { toast } from "react-toastify"
import { Product } from "../../models/Product";
import { Category } from "../../models/Category";


function AddProduct() {
  const [message, setMessage] = useState(""); 
  const idRef = useRef<HTMLInputElement>(null); 
  const titleRef = useRef<HTMLInputElement>(null); 
  const priceRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const ratingRef = useRef<HTMLInputElement>(null);
  const activeRef = useRef<HTMLInputElement>(null);
  const productsUrl = "https://mihkel-05-2025-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  const categoriesUrl = "https://mihkel-05-2025-default-rtdb.europe-west1.firebasedatabase.app/categories.json";
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]); 

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

  function add() {
    if(idRef.current === null || titleRef.current === null ||
      priceRef.current === null || imageRef.current === null ||
      descriptionRef.current === null || categoryRef.current === null ||
      ratingRef.current === null || activeRef.current === null
    ) {
      return;
    }

    if (titleRef.current.value === "") {
      setMessage("Uh oh, title can't be empty!");
      return; 
    } 

    if (titleRef.current.value.length < 4 ) {
      setMessage("Title has to be at least 4 characters long!");
      return; 
    } 

    products.push ({
      "id": Number(idRef.current.value),
      "title": titleRef.current.value,
      "price": Number(priceRef.current.value), 
      "image": imageRef.current.value,
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "rating": {
        "rate": Number(ratingRef.current.value),
        "count": 0
      },
      "active": activeRef.current.checked
    });

    toast.success("Product added successfully!");
    fetch(productsUrl, {method: "PUT", body: JSON.stringify(products)})

  }

  return (
    <div>
      <p>{message}</p>
      <label>ID</label> <br />
      <input ref={idRef}  type="text" /> <br />
      <label>Title</label> <br />
      <input ref={titleRef}  type="text" /> <br />
      <label>Price</label> <br />
      <input ref={priceRef}  type="number" min="0" /> <br />
      <label>Image</label> <br />
      <input ref={imageRef}  type="text" /> <br />
      <label>Description</label> <br />
      <input ref={descriptionRef}  type="text" /> <br />
      <label>Category</label> <br />
      {/* <input   type="text" /> <br /> */}
      <select ref={categoryRef}>
        {categories.map(category => <option key={category.name}>{category.name}</option>)}
      </select> <br />
      <label>Rating (1-5)</label> <br />
      <input ref={ratingRef}  type="number" min="1" step="0.1" max="5" /> <br />
      <label>Active</label> <br />
      <input ref={activeRef}  type="checkbox" defaultChecked /> <br />
      <br />
      <button onClick={add}>Add</button> <br />
    </div>
  )
}

export default AddProduct