import { useRef, useState } from "react";
import ArraysHome from "./ArraysHome";
import esindusedFailist from "../../data/esindused.json"
import { Link } from "react-router-dom";

function Esindused() {
  const [linn, setLinn] = useState("Tallinn");
  const [esindused, setEsindused] = useState(esindusedFailist.slice());

  function arvutaKokku() {
    let summa = 0;
    esindused.forEach(esindus => summa = summa + esindus.keskus.length);
    return summa;
  }

   // tegelikkuses peavad kõik use-d olema kõige üleval, mitte funktsioonide all
  const otsingRef = useRef();
  
  // tegelikkuses peaks olema kõige üleval, sest HTML-s on kõige üleval
  function otsi() {
    const vastus = esindusedFailist.filter(esindus => esindus.keskus.includes(otsingRef.current.value));
    setEsindused(vastus);
  }

  return (
    <div>
      <ArraysHome />
      <label>Otsi</label>
      <input ref={otsingRef} onChange={otsi} type="text" />

      {/* <div>Hetkel aktiivne linn: {linn}</div> */}
      <button className={linn === "Tallinn" ? "aktiivne" : undefined} onClick={() => setLinn("Tallinn")}>Tallinn</button>
      <button className={linn === "Tartu" ? "aktiivne" : undefined} onClick={() => setLinn("Tartu")}>Tartu</button>
      <button className={linn === "Narva" ? "aktiivne" : undefined} onClick={() => setLinn("Narva")}>Narva</button>
      <button className={linn === "Pärnu" ? "aktiivne" : undefined} onClick={() => setLinn("Pärnu")}>Pärnu</button>

      <br /><br />

      {linn === "Tallinn" &&
      <div>
        {esindused.map(esindus => 
        <div key={esindus.keskus}>
          <div>{esindus.keskus}</div>
          <div>{esindus.tel}</div>
          <div>{esindus.aadress}</div>
          <Link to={"/esindus/" + esindus.keskus}>
            <button>Vaata lähemalt</button>
          </Link>
          <br />
        </div>)}
      </div>}

      {linn === "Tartu" &&
      <div>
        <p>Raatuse</p>
        <p>Lõunakeskus</p>
      </div>}

      {linn === "Narva" && <p>Fama</p>}

      {linn === "Pärnu" && <p>Port Artur 2</p>}

      <br /><br />

      <div>Kõikide keskuse nimede tähemärgid kokku: {arvutaKokku()} tk</div>
    </div>
  )
}

export default Esindused