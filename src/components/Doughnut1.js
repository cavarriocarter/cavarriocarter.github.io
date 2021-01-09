import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const data = {
  datasets: [
    {
      label: '# of Votes',
      id: 'test',
      data: [12, 19, 3, 5, 2, 3],
      legend: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
}

const DoughnutChart = () => (
  <>
    <div className='header'>
      <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/react16/example/src/charts/Doughnut.js'
        >
        </a>
      </div>
    </div>
    <Doughnut
      data={data}
      />
  </>
)

export default DoughnutChart