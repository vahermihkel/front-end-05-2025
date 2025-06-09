
function MaksimaalneKalkulaator() {
  return (
    <div>
      {/* nagu periood --> dropdownist väärtused 0 1 2 3 4 */}
      <label>Ülalpeetavate arv</label> <br />
      <input type="text" /> <br />
      <label>Netosissetulek</label> <br />
      <input type="text" /> <br />
      <label>Igakuised kohustused</label> <br />
      <input type="text" /> <br />
      <label>Sissetulek pärast kohustusi</label> <br />
      <input disabled value={"useState-st nagu intress kokku"} type="text" /> <br />
      <div>Maksimaalne pakutav limiit xx €</div>
    </div>
  )
}

export default MaksimaalneKalkulaator