import { useRef, useState } from "react"


function LaenuKalkulaator() {
  const [kuumakse, setKuumakse] = useState(351.61);
  const [kuumakseKorge, setKuumakseKorge] = useState(498.98);
  const [sissemakseProtsent, setSisseMakseProtsent] = useState(0);
  const [laenusumma, setLaenusumma] = useState(75000);

  const [intressKokku, setIntressKokku] = useState(3.85);
  const ostuhindRef = useRef();
  const sissemakseRef = useRef();
  const perioodRef = useRef();
  const marginaalRef = useRef();
  const euriborRef = useRef();

  // lihtsam kirjutada
  // function arvutaKuumakse() {
  //   setKuumakse(ostuhindRef.current.value / 30 / 12 * 1.6);
  // }

  //                   =    =>
  const arvutaKuumakse = () => {
    setKuumakse(
      (ostuhindRef.current.value - sissemakseRef.current.value) / perioodRef.current.value / 12 * 
      Number(marginaalRef.current.value) + Number(euriborRef.current.value)
    );
    setKuumakseKorge(
      (ostuhindRef.current.value - sissemakseRef.current.value) / perioodRef.current.value / 12 * 
      7/2
    );
  }

  const arvutaIntressKokku = () => {
    setIntressKokku(Number(marginaalRef.current.value) + Number(euriborRef.current.value));
    arvutaKuumakse();
  }

  const arvutaSisseMaksuProtsenti = () => {
    setSisseMakseProtsent(sissemakseRef.current.value / ostuhindRef.current.value * 100);
    setLaenusumma(ostuhindRef.current.value - sissemakseRef.current.value);
    arvutaKuumakse();
  }

  return (
    <div>

      <div>
        <label>Kinnisvara ostuhind</label><br />
        <input ref={ostuhindRef} onChange={arvutaSisseMaksuProtsenti} defaultValue={75000} type="text" /><br />
        <label>Sissemakse</label><br />
        <input ref={sissemakseRef} onChange={arvutaSisseMaksuProtsenti} defaultValue={0} type="text" /><br />
        <label>%</label><br />
        <input disabled value={sissemakseProtsent} type="text" /><br />
        <label className={laenusumma < 20000 || laenusumma > 10000000 ? "error-text" : undefined}>Laenusumma</label><br />
        <input className={laenusumma < 20000 || laenusumma > 10000000 ? "error-input" : undefined} disabled value={laenusumma} type="text" /><br />
        <label>Periood</label><br />
        {/* <input  type="text" /><br /> */}
        <select ref={perioodRef} defaultValue={30} onChange={arvutaKuumakse}>
          <option>5</option>
          <option>10</option>
          <option>15</option>
          <option>20</option>
          <option>25</option>
          <option>30</option>
        </select> <br />
        <label>Marginaal</label><br />
        <input ref={marginaalRef} onChange={arvutaIntressKokku} defaultValue={1.7} type="text" /><br />
        <label>Euribor</label><br />
        <input ref={euriborRef} onChange={arvutaIntressKokku} defaultValue={2.15} type="text" /><br />
        <label>Intress kokku</label><br />
        <input disabled type="text" value={intressKokku.toFixed(2)} /><br />
      </div>

      {laenusumma >= 20000 && laenusumma <= 10000000 ?
      <div>
        <div>Kuumakse {kuumakse.toFixed(2)} €</div>
        <div>Kui laenu intress peaks tõusma 7%-ni, on laenumakse {kuumakseKorge.toFixed(2)} €</div>
        <a href="https://www.lhv.ee/et/kodulaen" target="_blank"><button>Taotle kodulaenu</button></a>
      </div> :
      <div className="error-text">Laenusumma võib olla vahemikus 20 000-10 000 000 eurot.</div>
      }

    </div>
  )
}

export default LaenuKalkulaator