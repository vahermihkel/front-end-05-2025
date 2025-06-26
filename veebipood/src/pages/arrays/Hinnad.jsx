import { useRef, useState } from "react"
import hinnadFailist from "../../data/hinnad.json"
import ArraysHome from "./ArraysHome";
import { Link } from "react-router-dom";

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
    hinnad.sort((a,b) => b.number - a.number);
    setHinnad(hinnad.slice());
  }

  const sorteeriKasvavalt = () => {
    hinnad.sort((a,b) => a.number - b.number);
    setHinnad(hinnad.slice());
  }

  const filtreeriVaiksemaidKui25 = () => {
    const vastus = hinnadFailist.filter(hind => hind.number < 25);
    setHinnad(vastus);
  }

  const filtreeriSuuremadKui50 = () => {
    const vastus = hinnadFailist.filter(hind => hind.number > 50);
    setHinnad(vastus);
  }

  const arvutaKokku = () => {
    let summa = 0;
    hinnad.forEach(hind => summa = summa + hind.number);
    return summa;
  }

  // tegelikkuses peavad kõik use-d olema kõige üleval, mitte funktsioonide all
  const otsingRef = useRef();
  
  // tegelikkuses peaks olema kõige üleval, sest HTML-s on kõige üleval
  function otsi() {
    const vastus = hinnadFailist.filter(hind => hind.number.toString().includes(otsingRef.current.value));
    setHinnad(vastus);
  }

  return (
    <div>
      <ArraysHome />
      <label>Otsi</label>
      <input ref={otsingRef} onChange={otsi} type="number" />

      <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
      <button onClick={sorteeriKasvavalt}>Sorteeri kahanevalt</button>
      <br /><br />
      <button onClick={filtreeriVaiksemaidKui25}>Jäta alles väiksemad kui 25</button>
      <button onClick={filtreeriSuuremadKui50}>Jäta alles suuremad kui 50</button>
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
        <div key={hind.number}>
          <div>{hind.number}</div>
          <div>{hind.sonana}</div>
          <button onClick={() => kustuta(index)}>x</button>
          {/* kui esimest kaldkriipsu pole, siis liidab olemasolevale URL-le juurde */}
          <Link to={"/hind/" + index}>
            <button>Vt lähemalt</button>
          </Link>
        </div>)}

        <div>Hinnad kokku: {arvutaKokku()} €</div>
    </div>
  )
}

export default Hinnad

// onClick={() => setHinnad([])} --> panen () => ja lõppu () kui saadan midagi kaasa
// onClick={kustutaEsimene}  --> ei pane () => ja lõppu () kui mul pole midagi saata
// onClick={kustutaNeljas(3)} --> tekitab infinite loop errori

// HINNAD:
// {"number": 10, "sonana": "kümme"},
// {"number": 123, "sonana": "sada kakskümmend kolm"}