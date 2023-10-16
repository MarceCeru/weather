
import React, { useEffect } from 'react';
import { useState } from 'react';
import Humedad from './humedad';
import IndiceUV from './indiceUV';
import Viento from './viento';
import AmanecerAtardecer from './amanecerAtardecer';
import Visibilidad from './visibilidad';
import CalidadDelAire from './calidadDelAire';
import Maxima from './maxima';
import Minima from './minima';
import TemperaturaActual from './temperaturaActual';
import Grados from './gradosActuales';
import GraficoDeBarras from './graficoDeBarras';
import { CurtainsRounded } from '@mui/icons-material';
import { circInOut } from 'framer-motion';


function Weather() {

  const [data, setData] = useState('');

  useEffect(() => {
    async function fetchData() {
      const respuesta = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,windspeed_10m_max&timezone=America%2FSao_Paulo&forecast_days=1')
      const datosJson = await respuesta.json();
      setData(datosJson);
    }
   
    fetchData();
  }, []);
  console.log(data);

  let hora = new Date();
  let horaSola = (hora.toString()).slice(16,18);
  console.log(horaSola);

  return (
    <div className="App">

      <div id='temperatura'>
        <TemperaturaActual codigo = {data && data["daily"] && data["daily"]["weathercode"][0]}
                           dia = {data && data["hourly"] && data["hourly"]["time"] && data["hourly"]["time"][0]} />
        <GraficoDeBarras uno={data && data["hourly"] && data["hourly"]["temperature_2m"] && data["hourly"]["temperature_2m"][0]}
                         dos={data && data["hourly"] && data["hourly"]["temperature_2m"] && data["hourly"]["temperature_2m"][3]}
                         tres={data && data["hourly"] && data["hourly"]["temperature_2m"] && data["hourly"]["temperature_2m"][6]}
                         cuatro={data && data["hourly"] && data["hourly"]["temperature_2m"] && data["hourly"]["temperature_2m"][9]}
                         cinco={data && data["hourly"] && data["hourly"]["temperature_2m"] && data["hourly"]["temperature_2m"][12]}
                         seis={data && data["hourly"] && data["hourly"]["temperature_2m"] && data["hourly"]["temperature_2m"][15]}
                         siete={data && data["hourly"] && data["hourly"]["temperature_2m"] && data["hourly"]["temperature_2m"][18]}
                         ocho= {data && data["hourly"] && data["hourly"]["temperature_2m"] && data["hourly"]["temperature_2m"][21]}         
        />
    
      </div>

      <div id='primerfila'>
        <Grados grados={data && data["hourly"] && data["hourly"]["temperature_2m"] && data["hourly"]["temperature_2m"][horaSola]} />
        <IndiceUV indiceuv={data && data["daily"] && data["daily"]["uv_index_max"]} />
        <Viento viento={data && data["daily"] && data["daily"]["windspeed_10m_max"]} />
        <Humedad humedad= {data && data["hourly"] && data["hourly"]["relativehumidity_2m"] && data["hourly"]["relativehumidity_2m"][horaSola]}/>
      </div>

      <div id='segundafila'>
        <Maxima maxima={data && data["daily"] && data["daily"]["temperature_2m_max"] && data["daily"]["temperature_2m_max"][0]} />
        <Minima minima={data && data["daily"] && data["daily"]["temperature_2m_max"] && data["daily"]["temperature_2m_min"][0]} />
        <AmanecerAtardecer amanecer={data && data["daily"] && data["daily"]["sunrise"] && data["daily"]["sunrise"][0]} atardecer={data && data["daily"] && data["daily"]["sunset"] && data["daily"]["sunset"][0]} />
        <Visibilidad Visibilidad = {data && data["hourly"] && data["hourly"]["visibility"] && data["hourly"]["visibility"][horaSola]}/>
        <CalidadDelAire />
      </div>

    </div>
  );

}

export default Weather;
