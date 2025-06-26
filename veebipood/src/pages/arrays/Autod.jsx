import { useRef, useState } from "react"
import ArraysHome from "./ArraysHome";
import autodFailist from "../../data/autod.json"
import { Link } from "react-router-dom";

function Autod() {
  const [tooted, setTooted] = useState(autodFailist.slice());

  function sorteeriAZ() {
// tooted.map((toode, index) => 
    tooted.sort((a,b) => a.nimi.localeCompare(b.nimi));
    setTooted(tooted.slice());
  }

  function sorteeriZA() {
    tooted.sort((a,b) => b.nimi.localeCompare(a.nimi));
    setTooted(tooted.slice());
  }

  function sorteeriTahedKasv() {
    tooted.sort((a,b) => a.nimi.length - b.nimi.length);
    setTooted(tooted.slice());
  }

  function sorteeriTahedKah() {
    tooted.sort((a,b) => b.nimi.length - a.nimi.length);
    setTooted(tooted.slice());
  }

  function sorteeriKolmasTahtAZ() {                 // 0123456
    tooted.sort((a,b) => a.nimi[2].localeCompare(b.nimi[2])); // Ferrari
    setTooted(tooted.slice());
  }

  function filtreeriIgaLoppevad() {
    const vastus = autodFailist.filter(toode => toode.nimi.endsWith("i"));
    setTooted(vastus);
  }

  function filtreeriTahemargidVahemKui5() {
    const vastus = autodFailist.filter(toode => toode.nimi.length < 5);
    setTooted(vastus);
  }

  function filtreeriTahemargid6VoiRohkem() {
    const vastus = autodFailist.filter(toode => toode.nimi.length >= 6);
    setTooted(vastus);
  }

  function filtreeriSisaldabLyhenditES() {
    const vastus = autodFailist.filter(toode => toode.nimi.includes("es"));
    setTooted(vastus);
  }

  function filtreeriTeineTahtOnE() {
    const vastus = autodFailist.filter(toode => toode.nimi[1] === "e");
    setTooted(vastus);
  }

  // const [books, setBooks] = useState([]);
  // function filtreeriEelviimaneTahtC() {
  //       const vastus = books.filter(book => book[book.length - 2] === 'c');
  //       setBooks(vastus);
  //   }

  function vaikesteks() {
    const vastus = autodFailist.map(auto => ({...auto, nimi: auto.nimi.toLowerCase()}));
    setTooted(vastus);
  }

  function suurteks() {
   const vastus = autodFailist.map(auto => ({nimi: auto.nimi.toUpperCase(), hind: auto.hind, aktiivne: auto.aktiivne, pilt: auto.pilt}));
    setTooted(vastus);
  }

  // NaN ---> Not a Number
  function arvutaKokku() {
    let summa = 0;
    tooted.forEach(toode => summa = summa + toode.hind);
    return summa;
  }

  // tegelikkuses peavad kõik use-d olema kõige üleval, mitte funktsioonide all
  const otsingRef = useRef();
  
  // tegelikkuses peaks olema kõige üleval, sest HTML-s on kõige üleval
  function otsi() {
    const vastus = autodFailist.filter(toode => toode.nimi.includes(otsingRef.current.value));
    setTooted(vastus);
  }

  return (
    <div>
      <ArraysHome />
      <label>Otsi</label>
      <input ref={otsingRef} onChange={otsi} type="text" />
      <div>Toodete koguarv: {tooted.length} tk</div>
      <br />
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriTahedKasv}>Sorteeri tähed kasvavalt</button>
      <button onClick={sorteeriTahedKah}>Sorteeri tähed kahanevalt</button>
      <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht A-Z</button>
      <br /><br />
      <button onClick={filtreeriIgaLoppevad}>Jäta alles i-ga lõppevad</button>
      <button onClick={filtreeriTahemargidVahemKui5}>Jäta alles kellel on vähem kui 5 tähemärki</button>
      <button onClick={filtreeriTahemargid6VoiRohkem}>Jäta alles kellel on 6 või rohkem tähemärki</button>
      <button onClick={filtreeriSisaldabLyhenditES}>Jäta alles kes sisaldavad lühendit es</button>
      <button onClick={filtreeriTeineTahtOnE}>Jäta alles kellel on teine täht e</button>
      <br /><br />

      <button onClick={vaikesteks}>Muuda kõik auto nimed väikesteks tähtedeks</button>
      <button onClick={suurteks}>Muuda kõik auto nimed suurteks tähtedeks</button>

      <br /><br />

      {tooted.map(toode => 
        <div key={toode.nimi}>
          {toode.nimi} - {toode.hind}€
          <Link to={"/auto/" + toode.nimi}>
            <button>Vaata lähemalt</button>
          </Link>
        </div>)}

      <div>Kõikide meie autode hinnad kokku: {arvutaKokku()}€</div>
    </div>
  )
}

export default Autod