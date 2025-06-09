import { useState } from "react"
import ArraysHome from "./ArraysHome";
import autodFailist from "../../data/autod.json"

function Autod() {
  const [tooted, setTooted] = useState(autodFailist.slice());

  function sorteeriAZ() {
// tooted.map((toode, index) => 
    tooted.sort((a,b) => a.localeCompare(b));
    setTooted(tooted.slice());
  }

  function sorteeriZA() {
    tooted.sort((a,b) => b.localeCompare(a));
    setTooted(tooted.slice());
  }

  function sorteeriTahedKasv() {
    tooted.sort((a,b) => a.length - b.length);
    setTooted(tooted.slice());
  }

  function sorteeriTahedKah() {
    tooted.sort((a,b) => b.length - a.length);
    setTooted(tooted.slice());
  }

  function sorteeriKolmasTahtAZ() {                 // 0123456
    tooted.sort((a,b) => a[2].localeCompare(b[2])); // Ferrari
    setTooted(tooted.slice());
  }

  function filtreeriIgaLoppevad() {
    const vastus = autodFailist.filter(toode => toode.endsWith("i"));
    setTooted(vastus);
  }

  function filtreeriTahemargidVahemKui5() {
    const vastus = autodFailist.filter(toode => toode.length < 5);
    setTooted(vastus);
  }

  function filtreeriTahemargid6VoiRohkem() {
    const vastus = autodFailist.filter(toode => toode.length >= 6);
    setTooted(vastus);
  }

  function filtreeriSisaldabLyhenditES() {
    const vastus = autodFailist.filter(toode => toode.includes("es"));
    setTooted(vastus);
  }

  function filtreeriTeineTahtOnE() {
    const vastus = autodFailist.filter(toode => toode[1] === "e");
    setTooted(vastus);
  }

  // const [books, setBooks] = useState([]);
  // function filtreeriEelviimaneTahtC() {
  //       const vastus = books.filter(book => book[book.length - 2] === 'c');
  //       setBooks(vastus);
  //   }

  return (
    <div>
      <ArraysHome />
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

      {tooted.map(toode => <div key={toode}>{toode}</div>)}
    </div>
  )
}

export default Autod