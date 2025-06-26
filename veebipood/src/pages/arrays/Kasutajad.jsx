import { useState } from "react"
import kasutajadFailist from "../../data/kasutajad.json"

function Kasutajad() {
  const [kasutajad, setKasutajad] = useState(kasutajadFailist.slice());

  const sorteeriNimiAZ = () => {
    kasutajad.sort((a,b) => a.nimi.localeCompare(b.nimi));
    setKasutajad(kasutajad.slice());
  }
  
  const sorteeriEmailAZ = () => {
    kasutajad.sort((a,b) => a.email.localeCompare(b.email));
    setKasutajad(kasutajad.slice());
  }

  const arvutaKokku = () => {
    let summa = 0;
    kasutajad.forEach(kasutaja => summa = summa + kasutaja.email.length);
    return summa;
  }

  // kokkuarvutus

  return (
    <div>
      <button onClick={sorteeriNimiAZ}>Sorteeri nimi A-Z</button>
      <button onClick={sorteeriEmailAZ}>Sorteeri email A-Z</button>
      {kasutajad.map(kasutaja => 
        <div key={kasutaja.email}>
          {kasutaja.nimi} ({kasutaja.email})
        </div>)}
      <div>{arvutaKokku()}</div>
    </div>
  )
}

export default Kasutajad