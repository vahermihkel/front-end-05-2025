import {  useState } from "react";
import { CartSumContext } from "./CartSumContext";

export const CartSumContextProvider = ({children}) => {
  const [cartSum, setCartSum] = useState(calculateCartSum())

  function calculateCartSum() {
    const products = JSON.parse(localStorage.getItem("cart")) || [];
    return products.reduce((total, product) => total + product.price, 0);
  }

  return (
    <CartSumContext.Provider value={{cartSum, setCartSum}}>
      {children}
    </CartSumContext.Provider>
  )
}

// edasijõudnute võimalus: Redux.