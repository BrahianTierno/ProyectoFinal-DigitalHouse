import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import  { LocationIcon } from './LocationIcon.jsx'
import 'leaflet/dist/leaflet.css'

const MapView = (latitud, longitud) => {

    console.log(longitud);
    


    return (
            <MapContainer center={[-38.00776240463958, -57.540148221307675]} zoom={13}>
                <TileLayer 
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'/>
                <Marker position={[-38.00776240463958, -57.540148221307675]} icon={LocationIcon}>
                    <Popup>
                        Hermitage Hotel.
                    </Popup>
                </Marker>
            </MapContainer>
    )
}

export default MapView