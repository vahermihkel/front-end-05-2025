import { useEffect, useRef, useState } from "react";


function MaintainCategories() {
  const url = "https://mihkel-05-2025-default-rtdb.europe-west1.firebasedatabase.app/categories.json";
  const [categories, setCategories] = useState([]);
  const categoryRef = useRef();

  // uef
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setCategories(json || []))
  }, []);

  const addCategory = () => {
    categories.push({"name": categoryRef.current.value});
    setCategories(categories.slice());
    categoryRef.current.value = "";
    fetch(url, {method: "PUT", body: JSON.stringify(categories)});
  }

  const deleteCategory = (index) => {
    categories.splice(index,1);
    setCategories(categories.slice());
    fetch(url, {method: "PUT", body: JSON.stringify(categories)});
  }

  return (
    <div>
      <label>Kategooria</label> <br />
      <input ref={categoryRef} type="text" /> <br />
      <button onClick={addCategory}>Lisa</button>

      <div>Kategooriaid kokku: {categories.length} tk</div>
      {categories.map((category, index) => 
        <div key={category.name}>
          {category.name}
          <button onClick={() => deleteCategory(index)}>x</button>
        </div>
        )}
    </div>
  )
}

export default MaintainCategories