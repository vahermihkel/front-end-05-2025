import { useNavigate, useParams } from "react-router-dom"
import autodFailist from "../../data/autod.json";
import { useRef } from "react";

function MuudaAuto() {
  const {index} = useParams();
  const leitud = autodFailist[index];
  const autoRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();
  const navigate = useNavigate();

  const muuda = () => {
    autodFailist[index] = {
      "nimi": autoRef.current.value, 
      "hind": hindRef.current.value, 
      "aktiivne": aktiivneRef.current.checked, 
      "pilt": piltRef.current.value
    }
    navigate("/halda-autod");
  }

  // Suunamiseks:
  // HTML-s, App.jsx sees olevale URL-le:   <Link to="/">
  // HTML-s, rakendusest välja URL-le: <a href="http://err.ee">
  // JS-s, rakendusest välja window.location.href="http://err.ee">
  // JS-s, rakenduse siseselt: useNavigate() hook: navigate("/")

  return (
    <div>
      {/* HaldaAutod.jsx seest kopeerisin: */}
      <label>Auto nimi</label> <br />
      <input ref={autoRef} type="text" defaultValue={leitud.nimi} /> <br />
      <label>Auto hind</label> <br />
      <input ref={hindRef} type="text" defaultValue={leitud.hind} /> <br />
      <label>Auto pilt</label> <br />
      <input ref={piltRef} type="text" defaultValue={leitud.pilt} /> <br />
      <label>Auto aktiivsus</label> <br />
      <input ref={aktiivneRef} type="checkbox" defaultChecked={leitud.aktiivne} /> <br />
      <button onClick={muuda}>Sisesta</button> <br />
    </div>
  )
}

export default MuudaAuto