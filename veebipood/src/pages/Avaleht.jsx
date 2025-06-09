// =  --> anname väärtust, paremal on väärtus, vasakul, kuhu see läheb
// == --> identsuse kontroll, ilma tüübikontrollita "7" == 7 jah   "true" == true jah
// === --> identsuse kontroll, vaatamaks kas vasak ja parem pool on täiesti sarnased
// ;   --> vabatahtlik rea lõpetamise tähistus
// []  --> array, useState muutuja, teda muutev funktsioon
// ()  --> funktsioonide seotud. tehete järjekorra tekitamiseks. 
//        tsüklis mitme muutuja loomiseks. kontrolli jaoks if-i sees.  
//    useState() <- funktsioon    const f = () =>      function f()   onClick={() => set()}
// {}  --> koodibloki tekitamiseks. HTMLs dünaamika. objektid. 
//        impordis kui tahan tükki sellest moodulist. if () {} else {}    fnkts() {}
// ? : --> ternary operator. lühendatud if/else.
// !   --> keerab vastupidi    !== ei võrdu     !true --> false
// .   --> ref.current.value ---> võtab tema seest mingisuguse võtme
// &&  --> kui on tõsi, siis tee ka parem pool
// ||  --> kui üks neist on tõsi, siis on õige

// lilla --> käsklused. import,from,return,export,if,else
// helesinine --> HTMLs atribuudid: src, className, alt, onClick
//                JS-s sissekirjutatud muutujad, imporditud muutujad:
//                useState, .current.value, console. , localStorage.
// tavaline sinine --> muutujad:  kogus, summa, laigitud, sonum
// tumesinine --> liigitus. button,div,img. const,function
// kollane --> funktsioon
// valge --> märgid &&, ===. väljanäidatav tekst HTMLs
// oranž --> jutumärkides väärtus
// heleroheline --> numbriline väärtus
// tumesinine --> kahendväärtus
// tumeroheline --> kommentaar
// roheline suure tähega --> HTMLs imporditud kood
// sulud värvuvad kindlas järjekorras:
// kollane --> lilla --> sinine --> kollane --> lilla --> sinine jne
//{{{{{{{{{{{{{{{{{{[[[[[[[[(((([]))))]]]]]]]]}}}}}}}}}}}}}}}}}}

// Kommentaar --> kaob koodist ära.

import { useState } from "react"

// number - number              ostukorvikogusumma, kogus, summa
// boolean - kahendväärtus      makstud, sisselogitud, täisealine, nõustunud
// string - sõna                postiindeks, majanumber, isikukood, telnr

// Eriomadused:
// number --> kas on suurem/väiksem. korrutamine/jagamine
// string --> mis on esimene, mis on viimane, kas sisaldab jnejne
// boolean --> keerata tagurpidi

function Avaleht() {
  const [laigitud, setLaigitud] = useState(false);
  const [kogus, setKogus] = useState(0);
  const [sonum, setSonum] = useState("Muuda kogust!");

  function nulli() {
    setKogus(0);
    setSonum("Kogus nullitud!");
  }

  function vahenda() {
    setKogus(kogus - 1);
    setSonum("Kogus vähendatud!");
  }

  function suurenda() {
    setKogus(kogus + 1);
    setSonum("Kogus suurendatud!");
  }

  return (
    <div>
      {/* {laigitud}. KODUS (soovi korral): pildi peale vajutades muudab. */}
      {/* {laigitud === true && <img onClick={} src="/laigitud.svg" alt="" />} */}
      {laigitud === true && <img src="/laigitud.svg" alt="" />}
      {laigitud === false && <img src="/mittelaigitud.svg" alt="" />}
      <button onClick={() => setLaigitud(true)}>Laik peale</button>
      <button onClick={() => setLaigitud(false)}>Laik maha</button>

      <br />
      <button onClick={() => setLaigitud(!laigitud)}>Muuda like-i</button>

      <br /><br />

      <div> {sonum} </div>
      {kogus > 0 && <button onClick={nulli}>Tagasi nulli</button>}
      {/* {kogus !== 0 && <button onClick={nulli}>Tagasi nulli</button>} */}
      <br />
      <button disabled={kogus === 0} onClick={vahenda}>-</button>
      <span>{kogus}</span>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht