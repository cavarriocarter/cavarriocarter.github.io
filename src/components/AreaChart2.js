import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'Hardware', Rating: 90
  },
  {
    name: 'Software', Rating: 65
  },
  {
    name: 'Linux', Rating: 60
  },
  {
    name: 'Windows', Rating: 70
  },
  {
    name: 'Networking', Rating: 85
  },
  {
    name: 'IoT', Rating: 75
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/Lrffmzfc/';

  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
      <AreaChart
        data={data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis ticks={[20, 40, 60, 80, 100]}/>
        <Tooltip />
        <Area type="monotone" dataKey="Rating" stroke="#8884d8" fill="#5cbf3d" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
    );
  }
}
