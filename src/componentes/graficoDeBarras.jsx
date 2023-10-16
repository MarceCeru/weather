
import { BarChart } from '@mui/x-charts/BarChart';
import { px } from 'framer-motion';
import React from "react";

export default function GraficoDeBarras({uno, dos, tres, cuatro, cinco, seis, siete, ocho}){
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
     data: [(uno), (dos),(tres), (cuatro), (cinco),(seis),(siete),(ocho)],
    },
  ]}
  width={450}
  height={300}
 
  

/>
        </div>
    )
}