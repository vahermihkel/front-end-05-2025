import { useState } from "react"
import hinnadFailist from "../../data/hinnad.json"
import ArraysHome from "./ArraysHome";

// renderdamine --> väljakuvamine
// re-renderdamine --> setteriga HTMLi muutmine

// kõigepealt näeme ühte HTMLi (mis tuleb algväärtustega).
// re-renderdamisel muudetakse HTMLi muutujaid muutes

// re-rendardmisel käiakse kogu HTML uuesti läbi --> algusest lõpuni
// renderdamisel tehakse tööd -> kuvatakse HTML välja
// re-renderdamisel tööd ei tehta kui on teada mäluaadressid
// React paneb automaatselt kõigile mäluaadressid, aga mitte tsükli
// sees olevatele HTML elementidele. selle jaoks on vaja panna key=""

function Hinnad() {          //         0   1  2  3  4  5  6  7  8   9
  const [hinnad, setHinnad] = useState(hinnadFailist.slice());

  const kustutaEsimene = () => {
    hinnad.splice(0,1); // .splice() .delete .remove.      splice(mitmendat,mitu-tk)
    setHinnad(hinnad.slice()); // slice() --> kustutab mälukoha
  }

  const kustutaTeine = () => {
    hinnad.splice(1,1);  // splice(1,1) --> vasakpoolne on järjekorranumber, mis algab number 0-st
    setHinnad(hinnad.slice());// kui tahan kustutada järjekorras teist, panen numbri 1
  }

  const kustutaKolmas = () => {
    hinnad.splice(2,1); 
    setHinnad(hinnad.slice());
  }

  const kustutaNeljas = (index) => {
    hinnad.splice(index,1); 
    setHinnad(hinnad.slice());
  }

  const kustuta = (index) => {
    hinnad.splice(index,1); 
    setHinnad(hinnad.slice());
  }

  // 31,135,54,9,77,45,90,123,234,87        31-135=-100
  const sorteeriKahanevalt = () => {
    hinnad.sort((a,b) => b - a);
    setHinnad(hinnad.slice());
  }

  const sorteeriKasvavalt = () => {
    hinnad.sort((a,b) => a - b);
    setHinnad(hinnad.slice());
  }

  const filtreeriVaiksemaidKui50 = () => {
    const vastus = hinnadFailist.filter(hind => hind < 50);
    setHinnad(vastus);
  }

  const filtreeriSuuremadKui100 = () => {
    const vastus = hinnadFailist.filter(hind => hind > 100);
    setHinnad(vastus);
  }

  

  return (
    <div>
      <ArraysHome />

      <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
      <button onClick={sorteeriKasvavalt}>Sorteeri kahanevalt</button>
      <br /><br />
      <button onClick={filtreeriVaiksemaidKui50}>Jäta alles väiksemad kui 50</button>
      <button onClick={filtreeriSuuremadKui100}>Jäta alles suuremad kui 100</button>
      <br /><br />
      <button onClick={() => setHinnad([])}>Tühjenda</button>
      <button onClick={kustutaEsimene}>Kustuta esimene</button>
      <button onClick={kustutaTeine}>Kustuta teine</button>
      <button onClick={kustutaKolmas}>Kustuta kolmas</button>
      <button onClick={() => kustutaNeljas(3)}>Kustuta neljas</button>

      <button onClick={() => setHinnad(hinnadFailist)}>Võta filtrid maha</button>
      <div>Kokku: {hinnad.length} tk</div>
      {/*           31     0
                  135       1
                  54        2
      */}
      {hinnad.map((hind, index) => 
        <div key={hind}>
          {hind}
          <button onClick={() => kustuta(index)}>x</button>
        </div>)}
    </div>
  )
}

export default Hinnad

// onClick={() => setHinnad([])} --> panen () => ja lõppu () kui saadan midagi kaasa
// onClick={kustutaEsimene}  --> ei pane () => ja lõppu () kui mul pole midagi saata
// onClick={kustutaNeljas(3)} --> tekitab infinite loop errori