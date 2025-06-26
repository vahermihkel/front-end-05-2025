import { useState } from "react";
import { toast } from "react-toastify";
import "../../css/Cart.css"
import minus from "../../assets/minus.png"
import plus from "../../assets/plus.png"
import deleteButton from "../../assets/remove.png"


function Cart() {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  const remove = (index) => {
    // const updatedProducts = [...products];
    // const removedProduct = updatedProducts[index]?.title || "Product";
    products.splice(index, 1);
    setProducts(products.slice());
    localStorage.setItem("cart", JSON.stringify(products));
    toast.error(`${products[index].title} removed from cart`);
  };

  const emptyCart = () => {
    setProducts([]);
    localStorage.setItem("cart", JSON.stringify([]));
    toast.info("Cart emptied");
  };

  const calculateTotal = () => {
    return products.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div>
      <button onClick={emptyCart}>Empty</button>
      <div>Cart total: {products.length} products</div>
      <br />

      {products.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        <>
          {products.map((product, index) => (
            <div key={index} className="product">
              <img className="picture" src={product.image} alt="" />
              <div className="title">{product.title}</div>
              <div className="price">{product.price.toFixed(2)} €</div>
              <div className="quantity">
                <img className="button" src={minus} alt="" />
                <div>1 tk</div>
                <img className="button" src={plus} alt="" />
              </div>
              <div className="total">{product.price.toFixed(2)} €</div>
              <img className="button" onClick={() => remove(index)} src={deleteButton} alt="" />
            </div>
          ))}
        </>
      )}

      <br />
      <div>Cart total: {calculateTotal().toFixed(2)} €</div>
    </div>
  );
}

export default Cart;
