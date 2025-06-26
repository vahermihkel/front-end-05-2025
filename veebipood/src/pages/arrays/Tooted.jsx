import { useState } from 'react'
import ArraysHome from './ArraysHome'
import tootedFailist from "../../data/tooted.json"
// import ostukorvFailist from "../../data/ostukorv.json"
import { ToastContainer, toast } from 'react-toastify';
 
function Tooted() {
  const [tooted, setTooted] = useState(tootedFailist.slice());
 
  function sorteeriAZ() {
    tooted.sort((a, b) => a.localeCompare(b));
    setTooted(tooted.slice());
    }
 
    function sorteeriZA() {
      tooted.sort((a, b) => b.localeCompare(a));
      setTooted(tooted.slice());
    }
 
    function sorteeriTahedKasvavalt() {
      tooted.sort((a, b) => a.length - b.length);
      setTooted(tooted.slice());
    }
 
    function sorteeriTahedKahanevalt() {
      tooted.sort((a, b) => b.length - a.length);
      setTooted(tooted.slice());
    }
 
    function sorteeriTeineTahtAZ() {
      tooted.sort((a, b) => a[1].localeCompare(b));
      setTooted(tooted.slice());
    }
 
    function filtreeriKuni6Tähelised() {
      const vastus = tootedFailist.filter(toode => toode.length <= 6);
      setTooted(vastus);
    }
 
    function filtreeri6Tähelised() {
      const vastus = tootedFailist.filter(toode => toode.length === 6);
      setTooted(vastus);
    }
 
    function filtreeriLopugaA() {
      const vastus = tootedFailist.filter(toode => toode.endsWith("a"));
      setTooted(vastus);
    }
 
    function filtreeriLopugaY() {
      const vastus = tootedFailist.filter(toode => toode.endsWith("y"));
      setTooted(vastus);
    }
 
    function filtreeriPaaristahed() {
      const vastus = tootedFailist.filter(toode => toode.length %2 === 0);
      setTooted(vastus);
    }

    function lisaOstukorvi(toode) {
      const ostukorvLS = JSON.parse(localStorage.getItem("ostukorv")) || [];
      ostukorvLS.push(toode);
      localStorage.setItem("ostukorv", JSON.stringify(ostukorvLS));

      // ostukorvFailist.push(toode);
      toast.success("Ostukorvi lisatud!");
      // ei pea tegema setTooted või setOstukorv sest ma ei uuenda HTMLi
    }

      // kokkuarvutus
 
  return (
    <div>
      <ArraysHome />
      <div>Toodete koguarv: {tooted.length} tk</div>
      <br />
      <button onClick={sorteeriAZ} >Sorteeri A-Z</button>
      <button onClick={sorteeriZA} >Sorteeri Z-A</button>
      <button onClick={sorteeriTahedKasvavalt} >Sorteeri tähed kasvavalt</button>
      <button onClick={sorteeriTahedKahanevalt} >Sorteeri tähed kahanevalt</button>
      <button onClick={sorteeriTeineTahtAZ} >Sorteeri teise tähe järgi AZ</button>
      <br /><br />
      <button onClick={filtreeriKuni6Tähelised}>Jäta alles kuni 6 tähelised</button>
      <button onClick={filtreeri6Tähelised}>Jäta alles täpselt 6 tähelised</button>
      <button onClick={filtreeriLopugaA}>Jäta alles A-ga lõppevad</button>
      <button onClick={filtreeriLopugaY}>Jäta alles Y-ga lõppevad</button>
      <button onClick={filtreeriPaaristahed}>Jäta alles paarisarv tähti sisaldavad</button>
      <br />
      <button onClick={() => setTooted(tootedFailist.slice())} >Originaali</button>
 
      {tooted.map(toode => 
      <div key={toode.nimi}>
        {/* {toode} */}
        <img className="pilt" src={toode.pilt} alt="" />
        <div>{toode.nimi}</div>
        <div>{toode.hind}</div>
        <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
      </div>)}  


      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
      />
    </div>
  )
}
 
export default Tooted