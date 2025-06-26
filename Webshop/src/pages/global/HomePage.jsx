import { useState } from "react"
import productsFromFile from "../../data/products.json"
import { Link } from 'react-router-dom'
import { toast } from "react-toastify";
import "../../css/HomePage.css"

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  const addToCart = (clickedProduct) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(clickedProduct);
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success("Product added to cart!");
  };

  const sortAZ = () => {
    products.sort((a,b) => a.title.localeCompare(b.title));
    setProducts(products.slice());
  }

  const sortZA = () => {
    products.sort((a,b) => b.title.localeCompare(a.title));
    setProducts(products.slice());
  }

  const sortPriceAZ = () => {
    products.sort((a,b) => Number(a.price) - Number(b.price));
    setProducts(products.slice());
  }

  const sortPriceZA = () => {
    products.sort((a,b) => Number(b.price) - Number(a.price));
    setProducts(products.slice());
  }

  const sortRatingAZ = () => {
    products.sort((a,b) => Number(a.rating.rate) - Number(b.rating.rate));
    setProducts(products.slice());
  }

  const sortRatingZA = () => {
    products.sort((a,b) => Number(b.rating.rate) - Number(a.rating.rate));
    setProducts(products.slice());
  }

  const filterByElectronics = () => {
    const result = productsFromFile.filter(product => product.category === "electronics");
    setProducts(result);
  }

  const filterByMensClothing = () => {
    const result = productsFromFile.filter(product => product.category === "men's clothing");
    setProducts(result);
  }

  const filterByWomensClothing = () => {
    const result = productsFromFile.filter(product => product.category === "women's clothing");
    setProducts(result);
  }

  const filterByJewelery = () => {
    const result = productsFromFile.filter(product => product.category === "jewelery");
    setProducts(result);
  }

  const showAll = () => {
    setProducts(productsFromFile)
  }


  return (
    <div>
     
      <button onClick={sortAZ}>Sort A-Z</button>
      <button onClick={sortZA}>Sort Z-A</button>
      <button onClick={sortPriceAZ}>Sort price A-Z</button>
      <button onClick={sortPriceZA}>Sort price Z-A</button>
      <button onClick={sortRatingAZ}>Sort rating A-Z</button>
      <button onClick={sortRatingZA}>Sort rating Z-A</button>
      <br /> 
      <button onClick={showAll}>All</button>
      <button onClick={filterByElectronics}>Electronics</button>
      <button onClick={filterByMensClothing}>Men's clothing</button>
      <button onClick={filterByWomensClothing}>Women's clothing</button>
      <button onClick={filterByJewelery}>Jewelery</button>
      


      <div className="products">
        {products.map((product) =>
        <div key={product.id} className="home-product">
          <img className="home-picture" src={product.image} alt="" />
          <div className="home-title">{product.title}</div>
          <div className="home-price">{Number(product.price).toFixed(2)} €</div>
          <div>Rating: {product.rating?.rate ?? "N/A"} </div>
          <button onClick={() => addToCart(product)}>Add to cart</button>
          <Link to={"/product/" + product.title}>
            <button>View details</button>
          </Link>
          <br /><br />
        </div>
        )}
      </div>
      

    </div>
  );
}

export default HomePage;
