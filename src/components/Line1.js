import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

import Container from '@material-ui/core/Container';


const data = [
  {
    name: 'AT&T', Email: 5, Software: 5, Phone: 5,  Hardware: 35, Troubleshooting: 45, Reporting: 0
  },
  {
    name: 'Medecision', Email:30, Software: 30, Hardware: 5, Reporting: 10, Troubleshooting: 25, Phone: 15
  },
  {
    name: 'Entouch', Email: 30, Software: 25, Hardware: 15, Reporting: 10, Troubleshooting: 10, Phone: 15
  },
  {
    name: 'NCR', Email: 30, Software: 15, Hardware: 5, Reporting: 20, Troubleshooting: 15, Phone: 20
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (

  <div style={{ width: '100%', height: 500 }}>
    <ResponsiveContainer>
      <LineChart
        data={data}
        margin={{
          top: 5, right: 0, left: -25, bottom: 35,
        }}
      >
        <CartesianGrid strokeDasharray="6 6" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
              <Legend
                iconType="circle"
                iconSizealign="center"
                layout="vertical"
                iconSize="10"
                />
        <Line type="monotone" dataKey="Email" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="Software" stroke="#008a09" />
        <Line type="monotone" dataKey="Hardware" stroke="#d9b800" />
        <Line type="monotone" dataKey="Reporting" stroke="#d41c1c" />
        <Line type="monotone" dataKey="Troubleshooting" stroke="#ffa600" />
        <Line type="monotone" dataKey="Phone" stroke="#00eaff" />

      </LineChart>
    </ResponsiveContainer>

  </div>
    );
  }
}
