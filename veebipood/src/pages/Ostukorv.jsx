import { useState } from "react"

function Ostukorv() {
  //     HTML    millega muudan          algväärtus
  const [tooted, setTooted] = useState(["Coca", "Fanta", "Sprite", "Red bull"]);

  const kustuta = (index) => {
    tooted.splice(index,1);
    // setTooted([...tooted]); ChatGPT
    setTooted(tooted.slice());
  }

  return (
    <div>
      <button onClick={() => setTooted([])}>Tühjenda</button>
      <div>Ostukorvis on {tooted.length} toodet</div>
      <br />
      {tooted.length > 0 && <button onClick={() => kustuta(0)}>Kustuta esimene</button>}
      {tooted.length > 1 && <button onClick={() => kustuta(1)}>Kustuta teine</button>}
      {tooted.length > 2 && <button onClick={() => kustuta(2)}>Kustuta kolmas</button>}
      {tooted.length > 3 && <button onClick={() => kustuta(3)}>Kustuta neljas</button>}


      {tooted.map((toode, index) => 
        <div key={toode}>
          {toode}
          <button onClick={() => kustuta(index)}>x</button>
        </div>)}

      <br /><br />
      <div>Ostukorvi kogusumma: xx €</div>
    </div>
  )
}

export default Ostukorv