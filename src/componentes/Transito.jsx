import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'
import lineas from "./lineas.json";
import { useState } from 'react';
import { useEffect } from 'react';




export default function Transito () {

 // const [datotransporte, setDatotransporte] = useState('');

/*useEffect(() => {
 async function fetchDatatransporte() {
   const respuesta = await fetch('https://apitransporte.buenosaires.gob.ar/colectivos/feed-gtfs?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6');
   const datostranspJson = await respuesta.json();
   setDatotransporte(datostranspJson);
 }
fetchDatatransporte();
},[])*/

    return(
     <div>
<MapContainer center={[ -34.6389, -58.52276]} zoom={11} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetm,ap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {lineas.map((item,index)=>{
         return ( <Marker position={[item["latitude"], item["longitude"]]}>
                         <Popup>
                           A pretty CSS3 popup. <br /> Easily customizable.
                         </Popup>
                  </Marker>)
  })}

</MapContainer>
</div>
)

}