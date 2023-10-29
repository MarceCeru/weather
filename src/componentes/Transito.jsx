import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
//import lineas from "./lineas.json";
import { useState } from 'react';
import { useEffect } from 'react';
import { Icon } from "leaflet";
import bus from "./autobus.png";
import SelectLabels from './selectMap';




export default function Transito() {

  const [line, setLine] = useState('');
  const [data, setData] =useState('');
  //console.log(line);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://datosabiertos-transporte-apis.buenosaires.gob.ar:443/colectivos/vehiclePositionsSimple?agency_id=16&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6');
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
 console.log(data);

  const objetos = data;
  let objetosFiltrados = objetos;
  if (line===10){
   objetosFiltrados = objetos && objetos.filter(objeto => objeto.route_short_name === "21A");
  }else if(line===20){
    objetosFiltrados = objetos && objetos.filter(objeto => objeto.route_short_name === "21B");
  }else if(line===30){
    objetosFiltrados = objetos && objetos.filter(objeto => objeto.route_short_name === "21E");
  }else if(line===40){
    objetosFiltrados = objetos && objetos.filter(objeto => objeto.route_short_name === "21F");
  }else if(line===50){
    objetosFiltrados = objetos && objetos.filter(objeto => objeto.route_short_name === "21G");
  }else if(line===60){
    objetosFiltrados = objetos && objetos.filter(objeto => objeto.route_short_name === "21J");
  }else if(line===70){
    objetosFiltrados = objetos && objetos.filter(objeto => objeto.route_short_name === "21I");
  }else if(line===80){
    objetosFiltrados = objetos && objetos.filter(objeto => objeto.route_short_name === "108A");
  }else{
  }

 /* useEffect(()=>{
    llamadaApi
  },[lineacolectivo]);*/


  const icon = new Icon({
    iconUrl: bus,
    iconSize: [26, 26]
  });

  return (
    <div>
    <SelectLabels line={line} setLine={setLine}/>
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
            </Popup>
          </Marker>
          );
        })}
      </MapContainer>
    </div>
  )
}