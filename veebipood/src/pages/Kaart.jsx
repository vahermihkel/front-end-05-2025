import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

function Kaart() {
  return (
    <div>
      <MapContainer style={{height: "300px"}} center={[59.435, 24.750]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[59.435, 24.750]}>
          <Popup>
            Viru keskus. <br /> Avatud 10-22.
          </Popup>
        </Marker>
        <Marker position={[59.422, 24.795]}>
          <Popup>
            Ülemiste keskus. <br /> Avatud 9-22.
          </Popup>
        </Marker>
        <Marker position={[59.427, 24.723]}>
          <Popup>
            Kristiine keskus. <br /> Avatud 8-22.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Kaart