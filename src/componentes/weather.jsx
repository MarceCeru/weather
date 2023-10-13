
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
import jsonData from './data.json';
import jsonData2 from './databis.json';

/*function Datos(){
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    async function obtenerDatosDeApi () {
      try {
        const respuesta = await fetch ("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,weathercode,visibility,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=America%2FSao_Paulo&forecast_days=1");
        if(!respuesta.ok){
          throw new Error ('No se puede obtener la respuesta de la Api');
        }
        const datos = await respuesta.json();
        setData(datos);
      }catch(error){
        setError(error);
      }
        }
  
        obtenerDatosDeApi();
      }, []);
      console.log(data);*/



function Weather() {

  const [jsonData3, setJsonData3] = useState(null);
  const [error, setError] = useState(null);

  /* const url='https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,weathercode,visibility,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=America%2FSao_Paulo&forecast_days=1'
   
   const getData = async () => {
     fetch(url)  
     .then(response => {
       return response.json();
     })
  
     .then(data => setJsonData3(data))
     .catch(error => console.log('error', error));
 
     console.log(jsonData3);
  
   useEffect(() => {
     getData()
   }, []);*/




  //}*/


  /* useEffect(() => {
      async function obtenerDatosDeApi () {
        try {
          const respuesta = await fetch ("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,weathercode,visibility,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&timezone=America%2FSao_Paulo&forecast_days=1");
          if(!respuesta.ok){
            throw new Error ('No se puede obtener la respuesta de la Api');
          }
          const datos = await respuesta.json();
          setJsonData3(datos);
        }catch(error){
          setError(error);
        }
          }
     
          obtenerDatosDeApi();
        }, []);
  
        console.log(jsonData3);*/
  //useEffect(() => {
    /* fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,windspeed_10m_max&timezone=America%2FSao_Paulo&forecast_days=1')
     .then(resp=>resp.json()
     ).then(data=>{
      console.log(data);
     }).catch(ex => {
      console.error(ex);
     })
    })*/



   /* async function obtenerDatosDeApi() {
      const url ='https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,windspeed_10m_max&timezone=America%2FSao_Paulo&forecast_days=1'
      const respuesta = await fetch(url).then((data) => {
        console.log(data)
      })
      const datos = await respuesta.json();
      setJsonData3(datos);

    }

    obtenerDatosDeApi();

  }, []

  );
   console.log(jsonData);*/




  /* useEffect(() => {

    const datos = async () => {
      const url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,visibility&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,windspeed_10m_max&timezone=America%2FSao_Paulo&forecast_days=1';
      const response = await fetch(url).then(async (data) => {
        const json = await data.json();
        console.log(json);
      });
    }
    datos();
  }, []);*/

  const [maxima, setMaxima] = useState(jsonData["daily"]["temperature_2m_max"]);
  const [minima, setMinima] = useState(jsonData["daily"]["temperature_2m_min"][0]);
  const [grados, setGrados] = useState(jsonData["hourly"]["temperature_2m"][17]);
  const [humedad, setHumedad] = useState(jsonData["hourly"]["relativehumidity_2m"][17]);
  const [indiceuv, setIndiceuv] = useState(jsonData["daily"]["uv_index_max"]);
  const [viento, setViento] = useState(jsonData["hourly"]["windspeed_10m"][17]);
  const [amanecer, setAmanecer] = useState((jsonData['daily']['sunrise'])[0]);
  const [atardecer, setAtardecer] = useState((jsonData['daily']['sunset'])[0]);
  const [codigo, setCodigo] = useState((jsonData2["hourly"]["weathercode"])[17]);
  const [temp, setTemp] = useState({
    uno: (jsonData["hourly"]["temperature_2m"])[0], dos: (jsonData["hourly"]["temperature_2m"])[3],
    tres: (jsonData["hourly"]["temperature_2m"])[6], cuatro: (jsonData["hourly"]["temperature_2m"])[9], cinco: (jsonData["hourly"]["temperature_2m"])[12],
    seis: (jsonData["hourly"]["temperature_2m"])[15], siete: (jsonData["hourly"]["temperature_2m"])[18], ocho: (jsonData["hourly"]["temperature_2m"])[21]
  });

  return (
    <div className="App">

      <div id='temperatura'>
        <TemperaturaActual codigo={codigo} />
        <GraficoDeBarras temp={temp} />
      </div>

      <div id='primerfila'>
        <Grados grados={grados} />
        <IndiceUV indiceuv={indiceuv} />
        <Viento viento={viento} />
        <Humedad humedad={humedad} />
      </div>

      <div id='segundafila'>
        <Maxima maxima={maxima} />
        <Minima minima={minima} />
        <AmanecerAtardecer amanecer={amanecer} atardecer={atardecer} />
        <Visibilidad />
        <CalidadDelAire />
      </div>

    </div>
  );

}

export default Weather;
