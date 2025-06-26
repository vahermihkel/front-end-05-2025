import { useRef, useState } from "react"
import tootedFailist from "../data/tooted.json"

// Reacti HOOK
// 1. useState
// - koosneb muutujat ja selle muutuja muutjast ning sulgude sees algväärtusest
// - HTMLs sisu muutmiseks
// - muutuja läheb HTMLi
// - muutja läheb onClickiga käima

// 2. useRef
// - a) pean ta looma
//   b) pean HTMLi inputiga siduma
//   c) pean tema seest väärtuse .current.value abil kätte saama
// - HTMLi inputi seest kirjutatu kätte saamiseks

function LisaToode() {
  const [sonum, setSonum] = useState(""); // useState --> HTMLs sisu muutmiseks
  const nimiRef = useRef(); // useRef --> HTMLi inputi seest kirjutatu kätte saamiseks
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();

  function lisa() {
    if (nimiRef.current.value === "") {
      setSonum("Ei saa tühja nimega lisada!");
      return; // ---> lõpetab funktsiooni
    } 

    if (nimiRef.current.value.length < 4) {
      setSonum("Peab olema vähemalt 4 tähemärki!");
      return; 
    } 
    
    setSonum("Toode lisatud!");
    tootedFailist.push ({
      "nimi": nimiRef.current.value,
      "hind": Number(hindRef.current.value), // number
      "aktiivne": aktiivneRef.current.checked, // checkbox
      "pilt": piltRef.current.value
      });

    nimiRef.current.value = "";
    hindRef.current.value = "";
    aktiivneRef.current.checked = false;
    piltRef.current.value = "";

    // if (nimiRef.current.value === "") {
    //   setSonum("Ei saa tühja nimega lisada!")
    // } else {
    //   setSonum("Toode lisatud!");
    // }

    // nimiRef.current.value === "" ?
    //       setSonum("Ei saa tühja nimega lisada!") :
    //       setSonum("Toode lisatud!");
  }

  return (
    <div>
      <p>{sonum}</p>
      <label>Toote nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <label>Toote hind</label> <br />
      <input ref={hindRef}  type="number" /> <br />
      <label>Toote pilt</label> <br />
      <input ref={piltRef}  type="text" /> <br />
      <label>Toote aktiivsus</label> <br />
      <input ref={aktiivneRef}  type="checkbox" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
    </div>
  )
}

export default LisaToode