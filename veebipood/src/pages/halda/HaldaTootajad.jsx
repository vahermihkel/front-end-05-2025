import HaldaHome from './HaldaHome'
import tootajadFailist from "../../data/tootajad.json"
import { useState } from 'react';
import { useRef } from 'react';
 
function HaldaTootajad() {
 
const [tootajad, setTootajad] = useState(tootajadFailist.slice());
const eesnimiRef = useRef();
const ametikohtRef = useRef();
const vanusRef = useRef();
 
const kustuta = (index) => {
tootajadFailist.splice(index, 1);
setTootajad(tootajadFailist.slice());
}
 
 
const lisa = () => {
  tootajadFailist.push({
    "eesnimi": eesnimiRef.current.value,
    "ametikoht": ametikohtRef.current.value,
    "vanus": vanusRef.current.value
  });
 
  setTootajad(tootajadFailist.slice());
  eesnimiRef.current.value = "";
  ametikohtRef.current.value = "";
  vanusRef.current.value = "";
};
 
  return (
    <div>
      <HaldaHome />
      <label>Eesnimi</label> <br />
      <input ref={eesnimiRef}  type="text" /> <br />
      <label>Ametikoht</label> <br />
      <input ref={ametikohtRef}  type="text" /> <br />
      <label>Vanus</label> <br />
      <input ref={vanusRef}  type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Eesnimi</th>
            <th>Ametikoht</th>
            <th>Vanus</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {tootajad.map((tootaja, index) => 
          <tr key={index}>
            <td>{index} </td>
            <td>{tootaja.eesnimi}</td> 
            <td>{tootaja.ametikoht}</td> 
            <td>{tootaja.vanus}</td> 
            <td><button onClick={() => kustuta(index)}>x</button></td>
            </tr>)}
        </tbody>
      </table>
    </div>
  )
 
}
 
export default HaldaTootajad