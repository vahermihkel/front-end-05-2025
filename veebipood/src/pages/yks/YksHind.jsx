import { useParams } from "react-router-dom"
import hinnadFailist from "../../data/hinnad.json"

function YksHind() {
  const { index } = useParams();
  const leitudHind = hinnadFailist[index]; 
  // kui võtan indexi (järjekorranumbri) abil, siis on [0], kus 0 on esimene

  if (leitudHind === undefined) {
    return <div>Hinda ei leitud</div>
  }

  return (
    <div>
      <div>Index: {index}</div>
      <div>Hind: {leitudHind.number}</div>
      <div>Sõnana: {leitudHind.sonana}</div>
    </div>
  )
}

export default YksHind