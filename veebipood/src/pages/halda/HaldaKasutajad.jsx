import { useRef } from "react";
import kasutajadFailist from "../../data/kasutajad.json"

function HaldaKasutajad() {
  const emailRef = useRef();
  const nimiRef = useRef();

  const lisa = () => {
    kasutajadFailist.push({
      email: emailRef.current.value,
      nimi: nimiRef.current.value
    });
    // 2. SIIN PEAB SEEJÄREL HTMLi UUENDAMA
  }

  return (
    <div>
      <label>Email</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <label>Nimi</label> <br />
      <input ref={nimiRef} type="text" /> <br />
      <button onClick={lisa}>Lisa</button>
      {/* 1. SIIN KUVADA VÄLJA KÕIK KASUTAJAD */}
    </div>
  )
}

export default HaldaKasutajad