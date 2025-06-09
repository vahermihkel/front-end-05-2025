import HaldaHome from "./HaldaHome"
import autodFailist from "../../data/autod.json"
import { useRef, useState } from "react"

function HaldaAutod() {
  const [autod, setAutod] = useState(autodFailist.slice());
  const autoRef = useRef();

  const kustuta = (index) => {
    autodFailist.splice(index,1);
    setAutod(autodFailist.slice());
  }

  const lisa = () => {
    autodFailist.push(autoRef.current.value);
    setAutod(autodFailist.slice());
    autoRef.current.value = "";
  }

  return (
    <div>
      <HaldaHome />
      <label>Auto</label> <br />
      <input ref={autoRef} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Auto</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {autod.map((auto, index) => 
            <tr key={auto}>
              <td>{index}</td>
              <td>{auto}</td>
              <td><button onClick={() => kustuta(index)}>x</button></td>
            </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaAutod