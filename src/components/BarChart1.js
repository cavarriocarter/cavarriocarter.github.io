import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  {
    name: 'Medecision', Email: 55, Phone: 40, Software: 30, Programming: 15
  },
  {
    name: 'Entouch', Email: 30, Phone: 20, Software: 5, Hardware: 30, Salesforce: 15
  },
  {
    name: 'NCR', Email: 45, Phone: 20, Reporting: 25, Software: 15
  }
];

export default class Example extends PureComponent {

  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
      <BarChart
        barGap={10}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Email" fill="#8884d8" />
        <Bar dataKey="Phone" fill="#82ca9d" />
        <Bar dataKey="Software" fill="#23a2fc" />
        <Bar dataKey="Hardware" fill="#fc8403" />
        <Bar dataKey="Salesforce" fill="#03fcad" />
        <Bar dataKey="Programming" fill="#8003fc" />
        <Bar dataKey="Reporting" fill="#f75454" />
      </BarChart>
    </ResponsiveContainer>
    </div>
    );
  }
}
