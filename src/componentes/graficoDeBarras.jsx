
import { BarChart } from '@mui/x-charts/BarChart';
import { px } from 'framer-motion';
import React from "react";

export default function GraficoDeBarras({temp}){
    return(
        <div id='graficodebarras'>
            <BarChart
 
  xAxis={[
    {
      id: 'barCategories',
      data: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],
      scaleType: 'band',
    },
  ]}
  series={[
    {
     data: [(temp.uno), (temp.dos),(temp.tres), (temp.cuatro), (temp.cinco),(temp.seis),(temp.siete),(temp.ocho)],
    // data:[tempXHora],
    },
  ]}
  width={450}
  height={300}
 
  

/>
        </div>
    )
}