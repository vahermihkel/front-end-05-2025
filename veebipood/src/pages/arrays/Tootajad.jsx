import { useState } from 'react'
import ArraysHome from './ArraysHome'
import tootajadFailist from "../../data/tootajad.json"
 
function Tootajad() {
  const [tootajad, setTootajad] = useState(tootajadFailist.slice());
 
  function sorteeriAZ() {
    tootajad.sort((a,b) => a.localeCompare(b));
    setTootajad(tootajad.slice());
    }
 
    function sorteeriZA() {
      tootajad.sort((a, b) => b.localeCompare(a));
      setTootajad(tootajad.slice());
    }
 
    function sorteeriTahedKasvavalt() {
      tootajad.sort((a, b) => a.length - b.length);
      setTootajad(tootajad.slice());
    }
 
    function sorteeriTahedKahanevalt() {
      tootajad.sort((a, b) => b.length - a.length);
      setTootajad(tootajad.slice());
    }
 
    function sorteeriTeineTahtAZ() {
      tootajad.sort((a, b) => a[1].localeCompare(b));
      setTootajad(tootajad.slice());
    }
 
    function sorteeriSonadArv() {             
      tootajad.sort((a,b) => a.eesnimi.split("").length - b.eesnimi.split("").length); 
      setTootajad(tootajad.slice());
 
      }
 
      function filtreeri3Tähelised() {
        const vastus = tootajadFailist.filter(tootaja => tootaja.length === 3);
        setTootajad(vastus);
      }
 
 
    function filtreeri5VoiRohkem() {
      const vastus = tootajadFailist.filter(tootaja => tootaja.length >= 5);
      setTootajad(vastus);
 
    }
 
    function filtreeriSisaldabLyhenditAI(){
      const vastus = tootajadFailist.filter(tootaja => tootaja.includes("ai"));
      setTootajad(vastus);
 
    }
 
    function filtreeriNeljasTahtI() {
      const vastus = tootajadFailist.filter(tootaja => tootaja[3] === "i");
      setTootajad(vastus);
 
 }
 
    function filtreeriMAlgavad() {
    const vastus = tootajad.filter(tootaja => tootaja.startsWith("M"));
    setTootajad(vastus);
    }
 
    const filtreeriPaarisarvTahti = () => {
      const vastus = tootajad.filter(tootaja => tootaja.length % 2 === 0);
      setTootajad(vastus);
    };
 
    function kustuta(index) {
      const updated = tootajad.slice();
      updated.splice(index, 1);
      setTootajad(updated);
    }
 
      // kokkuarvutus

 
  return (
    <div>
      <ArraysHome />
      <div>Töötajate koguarv: {tootajad.length} tk</div>
      <br />
        <button onClick={sorteeriAZ} >Sorteeri A-Z</button>
        <button onClick={sorteeriZA} >Sorteeri Z-A</button> 
        <button onClick={sorteeriTahedKasvavalt} >Sorteeri tähed kasvavalt</button>
        <button onClick={sorteeriTahedKahanevalt} >Sorteeri tähed kahanevalt</button>
        <button onClick={sorteeriTeineTahtAZ} >Sorteeri teise tähe järgi </button>
        <button onClick={sorteeriSonadArv} >Sorteeri sõnad arvu järgi</button>
        <br /><br />
        <button onClick={filtreeri3Tähelised}>Jäta alles täpselt 3 tähelised</button>
        <button onClick={filtreeri5VoiRohkem}>Jäta alles rohkem kui 5 tähelised</button>
        <button onClick={filtreeriSisaldabLyhenditAI}>Jäta alles ai lühendit sisaldavad</button>
        <button onClick={filtreeriNeljasTahtI}>Jäta alles kõik millel neljas täht i </button>
        <button onClick={filtreeriMAlgavad}>Jäta alles M-ga algavad </button>
        <button onClick={filtreeriPaarisarvTahti}>Jäta alles kõik millel on paarisarv tähti</button>
        <br /><br />
        <button onClick={() => setTootajad ([])} >Tühjenda</button>
 
 
        <div>Kokku: {tootajad.length} töötajat </div>  
        {tootajad.map((tootaja, index) => 
        <div key={tootaja.eesnimi}>
            {/* {tootaja} <--- see koht tekitab sellise errori, et leht on valge
              saan välja näidata tema omadusi, nt {tootaja.eesnimi}
            */}
            <div>{tootaja.eesnimi}</div>
            <button onClick={() => kustuta(index)} >x</button>
            </div>)}
    </div>
  )
}
 
export default Tootajad
