"use client";

import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut as Doughnuts } from 'react-chartjs-2';


ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Remote Employees', 'On Site Employees'],
  datasets: [
    {
      label: 'Total Employees',
      data: [50, 100],
      backgroundColor: [
        "#F3735B",
        "#0BABE0",
      ],
      // borderWidth: 10,
    },
  ],
};

const Doughnut = () => {
  return (
    <Doughnuts
        data={data}
      className='!w-[214px] !h-[214px]'
      plugins={[{
        id: 'textCenter',
        beforeDraw: function(chartjs) {
          var width = chartjs.width;
          var height = chartjs.height;
          var ctx = chartjs.ctx;
          ctx.restore();
          // var fontSize = '16px';
          var fontSize: any = (height / 80).toFixed(2);
          ctx.font =  '400 ' + fontSize * 7 + 'px "Lato, sans-serif"';
          ctx.textAlign= 'center'
          ctx.textBaseline = "middle";
          var text = "150";
          var text2 = "Total Employees",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
          ctx.fillText(text2, textX+12, textY+10);
          ctx.fillText(text, textX+12, textY-10);
          ctx.save();
        },
        
      }]}
      options={{
        cutout: 80,
        spacing: 2,
        datasets:{
          doughnut: {
            borderJoinStyle: 'bevel',
            rotation: 250,
          },
        },
        plugins:{
          legend:{
            display: false,
            position:'bottom',
            labels: {
              textAlign: 'center',
              usePointStyle: true,
              pointStyle: 'circle',
              font:{
                family: "'Lato', sans-serif"
              }
            },
            maxWidth: 500,
            align: 'center',
          }
        },
        elements: {
          arc:{
            circular: true,
            borderRadius: 12,
          },
        },
      }}
    />
  );
}

export default Doughnut