import { useState } from "react"
//import ostukorvFailist from "../data/ostukorv.json"

function Ostukorv() {
  //     HTML    millega muudan          algväärtus
  const [tooted, setTooted] = useState(JSON.parse(localStorage.getItem("ostukorv")) || []);

  const kustuta = (index) => {
    tooted.splice(index,1);
    // setTooted([...tooted]); ChatGPT
    setTooted(tooted.slice());
    localStorage.setItem("ostukorv", JSON.stringify(tooted));
  }

  const arvutaKokku = () => {
    let summa = 0;
    // summa = summa + 1;
    // summa = summa + 2;
    // summa = summa + 1;
    // summa = summa + 2;
    tooted.forEach(toode => summa = summa + toode.hind);
    return summa;
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
        <div key={index}>
          {toode.nimi} {toode.hind}€
          <button onClick={() => kustuta(index)}>x</button>
        </div>)}

      <br /><br />
      <div>Ostukorvi kogusumma: {arvutaKokku()} €</div>
    </div>
  )
}

export default Ostukorv