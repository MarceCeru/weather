
import React  from 'react';
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
import jsonData from './data.json';
import jsonData2 from './databis.json';


function Weather() {

  const [maxima, setMaxima] = useState(jsonData["daily"]["temperature_2m_max"][0]);
  const [minima, setMinima] = useState(jsonData["daily"]["temperature_2m_min"][0]);
  const [grados, setGrados] = useState(jsonData["hourly"][ "temperature_2m"][17]);
  const [humedad, setHumedad] = useState(jsonData["hourly"]["relativehumidity_2m"][17]);
  const [indiceuv, setIndiceuv] = useState(jsonData["daily"][ "uv_index_max"]);
  const [viento, setViento] = useState(jsonData["hourly"]["windspeed_10m"][17]);
  const [amanecer, setAmanecer] = useState((jsonData['daily']['sunrise'])[0]);
  const [atardecer, setAtardecer] = useState((jsonData['daily']['sunset'])[0]);
  const [codigo, setCodigo] = useState((jsonData2["hourly"]["weathercode"])[17]);
  const [temp, setTemp] = useState({uno: (jsonData["hourly"][ "temperature_2m"])[0], dos:(jsonData["hourly"][ "temperature_2m"])[3],
  tres:(jsonData["hourly"][ "temperature_2m"])[6], cuatro:(jsonData["hourly"][ "temperature_2m"])[9], cinco:(jsonData["hourly"][ "temperature_2m"])[12],
  seis:(jsonData["hourly"][ "temperature_2m"])[15], siete:(jsonData["hourly"][ "temperature_2m"])[18], ocho:(jsonData["hourly"][ "temperature_2m"])[21]});
  
  return (
    <div className="App">

    <div id='temperatura'>
      <TemperaturaActual codigo={codigo}/>
      <GraficoDeBarras temp={temp}/>
    </div>

    <div id='primerfila'>
      <Grados grados={grados}/>
      <IndiceUV indiceuv={indiceuv}/>
      <Viento viento={viento}/>
      <Humedad humedad={humedad}/>
    </div>

    <div id='segundafila'>
      <Maxima maxima={maxima} />
      <Minima minima={minima} />
      <AmanecerAtardecer amanecer={amanecer} atardecer={atardecer}/>
      <Visibilidad/>
      <CalidadDelAire/>
    </div>

    </div>
  );
}

export default Weather;
