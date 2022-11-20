import React, { useEffect } from 'react'
import { Chart, registerables } from 'chart.js';
import { useHistogram } from '../../../hooks/useHistogram';
Chart.register(...registerables);

export const HistogramChart = () => {

    const { intervals, fi } = useHistogram();

    const labels = intervals;
    console.log(fi)
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Bin',
                data: fi,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                stack: 'combined',
                type: 'bar',
                borderWidth: 1
            },
            {
                label: 'Frecuency',
                data: fi,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                stack: 'combined',
                borderWidth: 1
            },
        ]
        }
  
    const config = {
        type: 'line',
        data: data,
        options: {
            plugins: {
                display: true,
                title: 'Histogram'
            },
            scales: {
                y: {
                    stacked: true
                }
            }
        }
    }
 
    useEffect(() => {
        
        const myChart = new Chart(
            document.getElementById('myChart'),
            config
          );
 
          return () => {
            myChart.destroy()
          }
    }, [])

    return (
        <canvas id="myChart" style={{ height: '50%'}}></canvas>
    )
}
    
 
