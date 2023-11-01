import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
//import lineas from "./lineas.json";
import { useState } from 'react';
import { useEffect } from 'react';
import { Icon } from "leaflet";
import bus from "./autobus.png";
import SelectLabels from './selectMap';
import SelectAutoWidth from './selectDireccion';




export default function Transito() {

  const [line, setLine] = useState('');
  const [data, setData] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://apitransporte.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=cca22d39c3b54f5a8909640fd676b50b&client_secret=e1542937985B4bD1bbB4388459038d13&agency_id=16');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
      }
    };

    fetchData();
    const fetchInterval = setInterval(fetchData, 31000);
    return () => clearInterval(fetchInterval);
  }, []);

  let objetos = data;
  let objetosFiltrados = objetos;
  if (line === 10) {
    objetosFiltrados = objetos && objetos.filter(objeto => objeto.route_short_name === "21A");
  } else if (line === 20) {
    objetosFiltrados = objetos && objetos.filter(objeto => objeto.route_short_name === "21B");
  } else if (line === 21) {
    objetosFiltrados = objetos && objetos.filter(objeto => objeto.route_short_name === "21D");
  } else if (line === 30) {
    objetosFiltrados = objetos && objetos.filter(objeto => objeto.route_short_name === "21E");
  } else if (line === 40) {
    objetosFiltrados = objetos && objetos.filter(objeto => objeto.route_short_name === "21F");
  } else if (line === 50) {
    objetosFiltrados = objetos && objetos.filter(objeto => objeto.route_short_name === "21G");
  } else if (line === 60) {
    objetosFiltrados = objetos && objetos.filter(objeto => objeto.route_short_name === "21J");
  } else if (line === 70) {
    objetosFiltrados = objetos && objetos.filter(objeto => objeto.route_short_name === "21I");
  } else if (line === 80) {
    objetosFiltrados = objetos && objetos.filter(objeto => objeto.route_short_name === "108A");
  } else {
  };


  /* useEffect(()=>{
     llamadaApi
   },[lineacolectivo]);*/


  const icon = new Icon({
    iconUrl: bus,
    iconSize: [26, 26]
  });
  //<SelectAutoWidth line={line}  />
  return (
    <div>
      <div id='selects'>
        <SelectLabels line={line} setLine={setLine} />
      </div>
      <MapContainer center={[-34.6389, -58.52276]} zoom={11} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetm,ap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {objetosFiltrados && objetosFiltrados.map((item, index) => {
          return (<Marker position={[item["latitude"], item["longitude"]]}
            icon={icon} >
            <Popup>
              <h4>Linea: {[item["route_short_name"]]}</h4>
              <h4>Velociad: {Math.trunc([item["speed"]])} km/h</h4>
              <h4>{[item["agency_name"]]}</h4>
              <h4>{[item["trip_headsign"]]}</h4>
            </Popup>
          </Marker>
          );
        })}
      </MapContainer>
    </div>
  )
}