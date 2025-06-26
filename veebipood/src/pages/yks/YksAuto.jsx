import { useParams } from "react-router-dom"
import autodFailist from "../../data/autod.json"

function YksAuto() {
  // loogeliste sulgude vahele läheb täpselt sama asi, mis läks URLi
  // mille alt see fail avaneb, kooloni järele
  const { autoNimi } = useParams();
  const leitud = autodFailist.find(auto => auto.nimi === autoNimi);
//const leitud = autodFailist.filter(auto => auto.nimi === nimi)[0]; identne

  // .map() .sort() .filter()  tsüklid -> käib igaühe läbi
  // .map() --> asendab igaühe HTMLga   map(element => <div></div>)
  // .sort() --> jätab koguse samaks, aga muudab järjekorda
  // .filter() --> vähendab kogust, aga ei muuda järjekorda. jätab alles kõik kellel on TRUE
  
  // .splice() .push() 

  // .find( => TRUE) tsükkel. väljastab ESIMESE leitud elemendi kellel on true
  if (leitud === undefined) {
    return <div>Autot ei leitud</div>
  }

  return (
    <div>
      <div>{leitud.nimi}</div>
      <div>{leitud.hind}</div>
      <div><img className="pilt" src={leitud.pilt} alt="" /></div>
      <div>{leitud.aktiivne ? "Toode on aktiivne" : "Toode on mitteaktiivne"}</div>
    </div>
  )
}

export default YksAuto