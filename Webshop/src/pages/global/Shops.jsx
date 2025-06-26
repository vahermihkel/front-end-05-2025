
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import '../../utils/fix-leaflet-icons.js'

function Shops() {
  return (
    <div>
    <MapContainer className="map" center={[59.416, 24.745]} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[59.422, 24.795]}>
        <Popup>
          Ülemiste keskus. <br /> Avatud 9-22.
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  )
}

export default Shops