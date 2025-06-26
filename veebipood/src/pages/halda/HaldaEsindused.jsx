import HaldaHome from "./HaldaHome"
import esindusedJSON from "../../data/esindused.json"
import { useRef, useState } from "react"
import { Link } from "react-router-dom";

function HaldaEsindused() {
  const [esindused, setEsindused] = useState(esindusedJSON.slice());
  const esindusRef = useRef();
  const telefonRef = useRef();
  const aadressRef = useRef();


  const lisa = () => {
    esindusedJSON.push({
      "keskus": esindusRef.current.value,
      "tel": telefonRef.current.value,
      "aadress": aadressRef.current.value
      }); // faili lisamine, refi väärtus (inputi sisse kirjutatu)
    setEsindused(esindusedJSON.slice()); // HTMLi uuendamine
    esindusRef.current.value = ""; // kui lisad uue esinduse, siis viskab pärast seda inputi tühjaks
    telefonRef.current.value = "";
    aadressRef.current.value = "";
  }

  const kustuta = (index) => {
    esindused.splice(index, 1);
    setEsindused(esindused.slice());
  }

  return (
    <div>
      <HaldaHome />
      <label>Esinduse keskus</label> <br />
      <input ref={esindusRef} type="text" /> <br />
      <label>Esinduse telefon</label> <br />
      <input ref={telefonRef} type="text" /> <br />
      <label>Esinduse aadress</label> <br />
      <input ref={aadressRef} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Esinduse nimi</th>
            <th>Esinduse telefon</th>
            <th>Esinduse aadress</th>
            <th>Kustuta</th>
            <th>Muuda</th>
          </tr>
        </thead>
        <tbody>
          {esindused.map((esindus, index) => 
            <tr key={esindus.keskus}>
              <td>{index}</td>
              <td>{esindus.keskus}</td>
              <td>{esindus.tel}</td>
              <td>{esindus.aadress}</td>
              <td><button onClick={() => kustuta(index)}>x</button></td>
              <td>
                <Link to={"/muuda-esindus/" + index}>
                  <button>Muuda</button>
                </Link>
              </td>
            </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaEsindused