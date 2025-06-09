import { useRef, useState } from "react"
import { ToastContainer, toast } from 'react-toastify';

function Kinkekaart() {
  const [summa, setSumma] = useState(20)
  const [kogus, setKogus] = useState(1);
  const emailRef = useRef();

  function sisestaEmail() {
    if (emailRef.current.value === "") {
      toast.error("Ei saa lisada tühja emaili!");
      return;
    }

    if (emailRef.current.value.length < 6) {
      toast.error("Email liiga lühike!");
      return;
    }

    if (emailRef.current.value.includes("@") === false) {
      toast.error("Email peab sisaldama @ märki!");
      return;
    }

    if (emailRef.current.value.includes(".") === false) {
      toast.error("Email peab sisaldama vähemalt ühte punkti!");
      return;
    }

    toast.success("Email lisatud!");
  }

  return (
    <div>
      <button className={summa === 20 ? "aktiivne" : undefined} onClick={() => setSumma(20)}>20 €</button>
      <button className={summa === 50 ? "aktiivne" : undefined} onClick={() => setSumma(50)}>50 €</button>
      <button className={summa === 100 ? "aktiivne" : undefined} onClick={() => setSumma(100)}>100 €</button>
      <p>Kinkekaarti summa: {summa} €</p>

      <br />

      <button disabled={kogus === 1} onClick={() => setKogus(kogus - 1)}>-</button>
      <span>{kogus}</span>
      <button onClick={() => setKogus(kogus + 1)}>+</button>

      <br /><br />

      <p>Kokku summa: {summa * kogus} €</p>

      <br /><br />

      <label>Email</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <button onClick={sisestaEmail}>Osta kinkekaart</button> <br />

      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        theme="dark"
      />
    </div>
  )
}

export default Kinkekaart