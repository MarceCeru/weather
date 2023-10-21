import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'
import lineas from "./lineas.json";
import { useState } from 'react';
import { useEffect } from 'react';
import colectivo from "./Icono-autobús-rojo.svg"
import { Icon } from "leaflet";



export default function Transito() {

  /* const [datotransporte, setDatotransporte] = useState('');
  
  useEffect(() => {
   async function fetchDatotransporte() {
     const respuesta = await fetch('https://apitransporte.buenosaires.gob.ar/colectivos/feed-gtfs?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6');
     const datostranspJson = await respuesta.json();
     setDatotransporte(datostranspJson);
   }
   
  fetchDatotransporte();
  },[]);
  console.log(datotransporte);*/


  const icon = new Icon({
    iconUrl: colectivo,
    iconSize: [25, 25]
  });




  return (
    <div>
      <MapContainer center={[-34.6389, -58.52276]} zoom={11} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetm,ap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {lineas.map((item, index) => {
          return (<Marker position={[item["latitude"], item["longitude"]]}
            icon={icon} >
            <Popup>
              <h4>Linea: {[item["route_short_name"]]}</h4>
              <h4>Velociad: {Math.trunc([item["speed"]])} km/h</h4>
              <h4>{[item["agency_name"]]}</h4>
            </Popup>
          </Marker>)
        })}

      </MapContainer>
    </div>
  )

}