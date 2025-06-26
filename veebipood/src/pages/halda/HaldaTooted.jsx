import { useState, useRef } from "react"
import tootedFailist from "../../data/tooted.json"
import HaldaHome from "./HaldaHome";
 
 
function HaldaTooted() {
const [tooted, setTooted] = useState(tootedFailist.slice());
const toodeRef = useRef();
const hindRef = useRef();
const piltRef = useRef();
const aktiivneRef = useRef();
 
const kustuta = (index) => {
  tootedFailist.splice(index, 1);
  setTooted(tootedFailist.slice());
}
 
const lisa = () => {
  tootedFailist.push ({
  "nimi": toodeRef.current.value,
  "hind": Number(hindRef.current.value),
  "aktiivne": aktiivneRef.current.checked,
  "pilt": piltRef.current.value
  });
 
  setTooted(tootedFailist.slice());
  toodeRef.current.value = "";
  hindRef.current.value = "";
  aktiivneRef.current.checked = false;
  piltRef.current.value = "";
 
}
 
  return (
    <div>
      <HaldaHome />
      <label>Toote nimi</label> <br />
      <input ref={toodeRef}  type="text" /> <br />
      <label>Toote hind</label> <br />
      <input ref={hindRef}  type="number" /> <br />
      <label>Toote pilt</label> <br />
      <input ref={piltRef}  type="text" /> <br />
      <label>Toote aktiivsus</label> <br />
      <input ref={aktiivneRef}  type="checkbox" /> <br />
      <button onClick={lisa}>Sisesta</button>
      <table>
        <thead>
         <tr>
        <th>Index</th>
        <th>Toote nimi</th> 
        <th>Toote hind</th>
        <th>Toote aktiivsus</th>
        <th>Toote pilt</th>
        <th>Kustuta</th>
        </tr>
        </thead>
        <tbody>
        {tooted.map((toode, index) => 
          <tr key={toode.nimi} className={toode.aktiivne ? "aktiivne.toode" : "mitteaktiivne.toode"} >
            <td>{index} </td>
            <td>{toode.nimi}</td> 
            <td>{toode.hind}</td> 
            <td>{toode.aktiivne ? "✅" : "❌"}</td> 
            <td><img className="pilt" src={toode.pilt} alt="" /></td> 
            <td><button onClick={() => kustuta(index)}>x</button></td>
            </tr>)}
        </tbody>
      </table>
 
 
    </div>
  )
}
 
export default HaldaTooted