import { useState } from "react"

// rfce
function TavaKalkulaator() {
  const [number, setNumber] = useState(0);
  const [operator, setOperator] = useState("*");

  return (
    <div>
      <span>{number} {operator} 2.156 = </span>
      {operator === "*" && <span>{(number * 2.156).toFixed(3)}</span>}
      {operator === "+" && <span>{(number + 2.156).toFixed(3)}</span>}
      {operator === "-" && <span>{(number - 2.156).toFixed(3)}</span>}
      {operator === "/" && <span>{(number / 2.156).toFixed(3)}</span>}
      <br />
      <button onClick={() => setNumber(7)}>7</button>
      <button onClick={() => setNumber(8)}>8</button>
      <button onClick={() => setNumber(9)}>9</button>
      <button onClick={() => setOperator("*")}>X</button>
      <br />
      <button onClick={() => setNumber(4)}>4</button>
      <button onClick={() => setNumber(5)}>5</button>
      <button onClick={() => setNumber(6)}>6</button>
      <button onClick={() => setOperator("-")}>-</button>
      <br />
      <button onClick={() => setNumber(1)}>1</button>
      <button onClick={() => setNumber(2)}>2</button>
      <button onClick={() => setNumber(3)}>3</button>
      <button onClick={() => setOperator("+")}>+</button>
      <br />
      <button>%</button>
      <button onClick={() => setNumber(0)}>0</button>
      <button onClick={() => setOperator("/")}>/</button>
      <button>=</button>

    </div>
  )
}

export default TavaKalkulaator