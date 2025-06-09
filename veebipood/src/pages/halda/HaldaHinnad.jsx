import HaldaHome from "./HaldaHome"
import hinnadFailist from "../../data/hinnad.json"
import { useRef, useState } from "react"

function HaldaHinnad() {
  const [hinnad, setHinnad] = useState(hinnadFailist.slice());
  const hindRef = useRef();

  const kustuta = (index) => {
    hinnadFailist.splice(index,1);
    setHinnad(hinnadFailist.slice());
  }

  const lisa = () => {
    hinnadFailist.push(hindRef.current.value);
    setHinnad(hinnadFailist.slice());
    hindRef.current.value = "";
  }

  return (
    <div>
      <HaldaHome />
      <label>Hind</label> <br />
      <input ref={hindRef} type="text" /> <br />
      <button onClick={lisa}>Lisa</button> <br />
      <br /><br />
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Hind</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {hinnad.map((hind, index) => 
            <tr key={hind}>
              <td>{index}</td>
              <td>{hind}</td>
              <td><button onClick={() => kustuta(index)}>x</button></td>
            </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaHinnad