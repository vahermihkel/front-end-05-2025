import { useEffect, useState } from "react";


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
        .map(pm => <option key={pm.NAME}>{pm.NAME} </option>)}
            </select> 
            </div>
   
  )
}

export default ParcelMachines