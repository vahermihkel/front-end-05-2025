import { useEffect, useState } from "react"

// Tehke webshopis täpselt samamoodi pakiautomaadid.

function ParcelMachines() {
  const [parcelMachines, setParcelMachines] = useState([]);

  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(res => res.json())
      .then(json => setParcelMachines(json))
  }, []);

  return (
    <div>
      <select>
        {parcelMachines
          .filter(pm => pm.A0_NAME === "EE")
          .map(pm => <option key={pm.NAME}>{pm.NAME}</option>)}
      </select>
    </div>
  )
}

export default ParcelMachines