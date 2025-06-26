import { useRef, useState } from "react"
import productsFromFile from "../../data/products.json"
import { toast } from "react-toastify"


function AddProduct() {
  const [message, setMessage] = useState(""); 
  const titleRef = useRef(); 
  const priceRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const ratingRef = useRef();
  const activeRef = useRef();
 
  function add() {
    if (titleRef.current.value === "") {
      setMessage("Uh oh, title can't be empty!");
      return; 
    } 

    if (titleRef.current.value.length < 4 ) {
      setMessage("Title has to be at least 4 characters long!");
      return; 
    } 

    productsFromFile.push ({
      "title": titleRef.current.value,
      "price": Number(priceRef.current.value), 
      "image": imageRef.current.value,
      "description": descriptionRef.current.value,
      "category": categoryRef.current.value,
      "rating": Number(ratingRef.current.value),
      "active": activeRef.current.checked
    });

    toast.success("Product added successfully!")

  }

  return (
    <div>
      <p>{message}</p>
      <label>Title</label> <br />
      <input ref={titleRef}  type="text" /> <br />
      <label>Price</label> <br />
      <input ref={priceRef}  type="number" min="0" /> <br />
      <label>Image</label> <br />
      <input ref={imageRef}  type="text" /> <br />
      <label>Description</label> <br />
      <input ref={descriptionRef}  type="text" /> <br />
      <label>Category</label> <br />
      <input ref={categoryRef}  type="text" /> <br />
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