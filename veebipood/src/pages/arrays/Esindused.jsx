import { useState } from "react";
import ArraysHome from "./ArraysHome";
import esindusedFailist from "../../data/esindused.json"

function Esindused() {
  const [linn, setLinn] = useState("Tallinn");
  const esindused = esindusedFailist.slice();

  return (
    <div>
      <ArraysHome />
      {/* <div>Hetkel aktiivne linn: {linn}</div> */}
      <button className={linn === "Tallinn" ? "aktiivne" : undefined} onClick={() => setLinn("Tallinn")}>Tallinn</button>
      <button className={linn === "Tartu" ? "aktiivne" : undefined} onClick={() => setLinn("Tartu")}>Tartu</button>
      <button className={linn === "Narva" ? "aktiivne" : undefined} onClick={() => setLinn("Narva")}>Narva</button>
      <button className={linn === "Pärnu" ? "aktiivne" : undefined} onClick={() => setLinn("Pärnu")}>Pärnu</button>

      <br /><br />

      {linn === "Tallinn" &&
      <div>
        {esindused.map(esindus => <p key={esindus}>{esindus}</p>)}
      </div>}

      {linn === "Tartu" &&
      <div>
        <p>Raatuse</p>
        <p>Lõunakeskus</p>
      </div>}

      {linn === "Narva" && <p>Fama</p>}

      {linn === "Pärnu" && <p>Port Artur 2</p>}
    </div>
  )
}

export default Esindused