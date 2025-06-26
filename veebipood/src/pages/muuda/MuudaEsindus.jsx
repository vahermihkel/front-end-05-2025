import { useNavigate, useParams } from "react-router-dom"
import esindusedJSON from "../../data/esindused.json"
import { useRef } from "react";

function MuudaEsindus() {
  const {index} = useParams();
  const leitud = esindusedJSON[index];
  const esindusRef = useRef();
  const telefonRef = useRef();
  const aadressRef = useRef();
  const navigate = useNavigate();

  const muuda = () => {
    esindusedJSON[index] = {
      "keskus": esindusRef.current.value, 
      "tel": telefonRef.current.value, 
      "aadress": aadressRef.current.value
    }
    navigate("/halda-esindused");
  }

  return (
    <div>
      <label>Esinduse keskus</label> <br />
      <input ref={esindusRef} type="text" defaultValue={leitud.keskus} /> <br />
      <label>Esinduse telefon</label> <br />
      <input ref={telefonRef} type="text" defaultValue={leitud.tel} /> <br />
      <label>Esinduse aadress</label> <br />
      <input ref={aadressRef} type="text" defaultValue={leitud.aadress} /> <br />
      <button onClick={muuda}>Sisesta</button> <br />
    </div>
  )
}

export default MuudaEsindus