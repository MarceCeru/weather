
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
import SelectCity from './selectWheaather';

function Weather() {

  const [data, setData] = useState('');
  const [provincia, setProvincia] = useState(6);
  let latitude = -31.4135;
  let longitud = -64.18105;

  if (provincia === 1) {
    latitude = -34.61315
    longitud = -58.37723;
  } else if (provincia === 2) {
    latitude = -34.61315
    longitud = -58.37723;
  } else if (provincia === 3) {
    latitude = -28.46957
    longitud = -65.78524;
  } else if (provincia === 4) {
    latitude = -27.21438
    longitud = -61.18795;
  } else if (provincia === 5) {
    latitude = -42.695736
    longitud = -65.085717;
  } else if (provincia === 6) {
    latitude = -31.4135
    longitud = -64.18105;
  } else if (provincia === 7) {
    latitude = -27.46784
    longitud = -58.8344;
  } else if (provincia === 8) {
    latitude = -30.74179
    longitud = -59.64517;
  } else if (provincia === 10) {
    latitude = -26.18489
    longitud = -58.17313;
  } else if (provincia === 11) {
    latitude = 12.45
    longitud = -86.95;
  } else if (provincia === 12) {
    latitude = -29.41105
    longitud = -66.85067;
  } else if (provincia === 13) {
    latitude = -32.89084
    longitud = -68.82717;
  } else if (provincia === 14) {
    latitude = -26.912201
    longitud = -54.536042;
  } else if (provincia === 15) {
    latitude = -38.95161
    longitud = -68.0591;
  } else if (provincia === 16) {
    latitude = -39.7641273
    longitud = -69.9911297;
  } else if (provincia === 17) {
    latitude = -24.7859
    longitud = -65.41166;
  } else if (provincia === 18) {
    latitude = -31.5375
    longitud = -68.53639;
  } else if (provincia === 19) {
    latitude = -33.29501
    longitud = -66.33563;
  } else if (provincia === 20) {
    latitude = -49.0750472
    longitud = -74.9164441;
  } else if (provincia === 21) {
    latitude = -31.64881
    longitud = -60.70868;
  } else if (provincia === 22) {
    latitude = -27.79511
    longitud = -64.26149;
  } else if (provincia === 23) {
    latitude = -53.8319422
    longitud = -68.840839;
  } else if (provincia === 24) {
    latitude = -26.82414
    longitud = -65.2226;
  } else if (provincia === 25) {
    latitude = -28.46957
    longitud = -65.78524;
  } else if (provincia === 9) {
    latitude = -26.18489	
    longitud = -58.17313;
  }



  useEffect(() => {
    const fetchDatos = async () => {
      const respuesta = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitud}&current=is_day&hourly=temperature_2m,relative_humidity_2m,weather_code,visibility,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,wind_speed_10m_max&timezone=America%2FSao_Paulo&forecast_days=1`);
      const datosJson = await respuesta.json();
      setData(datosJson);
    };
    if (provincia !== '') {
      fetchDatos();
    }
  }, [latitude, longitud]);

  let hora = new Date();
  let horaSola = (hora.toString()).slice(16, 18);


  if (data && data["current"] && data["current"]["is_day"] === 0) {
    return (

      <div className="App0">

        <div id='selecProvincias'>
          <SelectCity provincia={provincia} setProvincia={setProvincia} />
        </div>

        <div id='temperatura'>
          <TemperaturaActual codigo={data && data["hourly"] && data["hourly"]["weather_code"][horaSola]}
            dia={data && data["hourly"] && data["hourly"]["time"] && data["hourly"]["time"][0]}
            noche={data && data["current"] && data["current"]["is_day"]} />
          <GraficoDeBarras uno={data && data["hourly"] && data["hourly"]["temperature_2m"] && data["hourly"]["temperature_2m"][0]}
            dos={data && data["hourly"] && data["hourly"]["temperature_2m"] && data["hourly"]["temperature_2m"][3]}
            tres={data && data["hourly"] && data["hourly"]["temperature_2m"] && data["hourly"]["temperature_2m"][6]}
            cuatro={data && data["hourly"] && data["hourly"]["temperature_2m"] && data["hourly"]["temperature_2m"][9]}
            cinco={data && data["hourly"] && data["hourly"]["temperature_2m"] && data["hourly"]["temperature_2m"][12]}
            seis={data && data["hourly"] && data["hourly"]["temperature_2m"] && data["hourly"]["temperature_2m"][15]}
            siete={data && data["hourly"] && data["hourly"]["temperature_2m"] && data["hourly"]["temperature_2m"][18]}
            ocho={data && data["hourly"] && data["hourly"]["temperature_2m"] && data["hourly"]["temperature_2m"][21]}
          />

        </div>

        <div id='primerfila'>
          <Grados grados={data && data["hourly"] && data["hourly"]["temperature_2m"] && data["hourly"]["temperature_2m"][horaSola]} />
          <IndiceUV indiceuv={data && data["daily"] && data["daily"]["uv_index_max"]} />
          <Viento viento={data && data["daily"] && data["hourly"]["wind_speed_10m"][horaSola]} />
          <Humedad humedad={data && data["hourly"] && data["hourly"]["relativehumidity_2m"] && data["hourly"]["relativehumidity_2m"][horaSola]} />
        </div>

        <div id='segundafila'>
          <Maxima maxima={data && data["daily"] && data["daily"]["temperature_2m_max"] && data["daily"]["temperature_2m_max"][0]} />
          <Minima minima={data && data["daily"] && data["daily"]["temperature_2m_max"] && data["daily"]["temperature_2m_min"][0]} />
          <AmanecerAtardecer amanecer={data && data["daily"] && data["daily"]["sunrise"] && data["daily"]["sunrise"][0]} atardecer={data && data["daily"] && data["daily"]["sunset"] && data["daily"]["sunset"][0]} />
          <Visibilidad Visibilidad={data && data["hourly"] && data["hourly"]["visibility"] && data["hourly"]["visibility"][horaSola]} />
          <CalidadDelAire />
        </div>

      </div>
    );
  } else {
    return (
      <div className="App1">

        <div id='selecProvincias'>
          <SelectCity provincia={provincia} setProvincia={setProvincia} />
        </div>

        <div id='temperatura'>
          <TemperaturaActual codigo={data && data["hourly"] && data["hourly"]["weather_code"][horaSola]}
            dia={data && data["hourly"] && data["hourly"]["time"] && data["hourly"]["time"][0]} />
          <GraficoDeBarras uno={data && data["hourly"] && data["hourly"]["temperature_2m"] && data["hourly"]["temperature_2m"][0]}
            dos={data && data["hourly"] && data["hourly"]["temperature_2m"] && data["hourly"]["temperature_2m"][3]}
            tres={data && data["hourly"] && data["hourly"]["temperature_2m"] && data["hourly"]["temperature_2m"][6]}
            cuatro={data && data["hourly"] && data["hourly"]["temperature_2m"] && data["hourly"]["temperature_2m"][9]}
            cinco={data && data["hourly"] && data["hourly"]["temperature_2m"] && data["hourly"]["temperature_2m"][12]}
            seis={data && data["hourly"] && data["hourly"]["temperature_2m"] && data["hourly"]["temperature_2m"][15]}
            siete={data && data["hourly"] && data["hourly"]["temperature_2m"] && data["hourly"]["temperature_2m"][18]}
            ocho={data && data["hourly"] && data["hourly"]["temperature_2m"] && data["hourly"]["temperature_2m"][21]}
          />

        </div>

        <div id='primerfila'>
          <Grados grados={data && data["hourly"] && data["hourly"]["temperature_2m"] && data["hourly"]["temperature_2m"][horaSola]} />
          <IndiceUV indiceuv={data && data["daily"] && data["daily"]["uv_index_max"]} />
          <Viento viento={data && data["daily"] && data["hourly"]["wind_speed_10m"][horaSola]} />
          <Humedad humedad={data && data["hourly"] && data["hourly"]["relativehumidity_2m"] && data["hourly"]["relativehumidity_2m"][horaSola]} />
        </div>

        <div id='segundafila'>
          <Maxima maxima={data && data["daily"] && data["daily"]["temperature_2m_max"] && data["daily"]["temperature_2m_max"][0]} />
          <Minima minima={data && data["daily"] && data["daily"]["temperature_2m_max"] && data["daily"]["temperature_2m_min"][0]} />
          <AmanecerAtardecer amanecer={data && data["daily"] && data["daily"]["sunrise"] && data["daily"]["sunrise"][0]} atardecer={data && data["daily"] && data["daily"]["sunset"] && data["daily"]["sunset"][0]} />
          <Visibilidad Visibilidad={data && data["hourly"] && data["hourly"]["visibility"] && data["hourly"]["visibility"][horaSola]} />
          <CalidadDelAire />
        </div>

      </div>
    )
  }
}

export default Weather;
