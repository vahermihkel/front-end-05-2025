import { useParams } from "react-router-dom"
import esindusedFailist from "../../data/esindused.json"

function YksEsindus() {
  // App.jsx:   path="/esindus/:keskus"
  const { keskus } = useParams(); // <---- URL-st. http://localhost:5173/esindus/->Ülemiste<-
  const leitud = esindusedFailist.find(esindus => esindus.keskus === keskus);
  // esindus =>    noole eest olev esinud on tähistus ühe array elemendi osas. seda võin
  //              ükskõik kuidas nimetada. standard on panna ainsuses: user, product, category

  // esindus => esindus.   <--- siin võtan ta kasutusele

  // [{keskus: "Ül"}, {keskus: "Vesse"}].find({keskus: "Ül"} => {keskus: "Ül"}.keskus === URL-s)
  // [{keskus: "Ül"}, {keskus: "Vesse"}].find({keskus: "Vesse"} => {keskus: "Vesse"}.keskus === URL-s)

  if (leitud === undefined) {
    return <div>Esindust ei leitud</div>
  }

  return (
    <div>
      <div>{leitud.keskus}</div>
      <div>{leitud.aadress}</div>
      <div>{leitud.tel}</div>
    </div>
  )
}

export default YksEsindus