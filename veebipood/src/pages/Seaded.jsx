import { useState } from "react"

function Seaded() {
  const [keel, setKeel] = useState("et");

  return (
    <div>
      {/* <div>Aktiivse keele lühend: {keel}</div> */}
      <button className={keel === "et" ? "aktiivne" : undefined} onClick={() => setKeel("et")}>Eesti</button>
      <button className={keel === "en" ? "aktiivne" : undefined} onClick={() => setKeel("en")}>English</button>
      <button className={keel === "ru" ? "aktiivne" : undefined} onClick={() => setKeel("ru")}>Pycckuj</button>
      <button className={keel === "es" ? "aktiivne" : undefined} onClick={() => setKeel("es")}>Espanol</button>

      <br /><br />
      {keel === "et" && <div>Leht on eesti keelne</div>}
      {keel === "en" && <div>Page is in English</div>}
      {keel === "ru" && <div>Страница на русском языке</div>}
      {keel === "es" && <div>La página está en español</div>}
      <br />
      {keel !== "et" && <div>Translations other than Estonian are not ready</div>}
    </div>
  )
}

export default Seaded