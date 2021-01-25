import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Legend, ResponsiveContainer, Tooltip,
} from 'recharts';

const data01 = [
  { name: 'Email', value: 35 },
  { name: 'Phone', value: 25 },
  { name: 'Software Troubleshooting', value: 15 },
  { name: 'Reporting', value: 25 },

];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/k9jkog04/';

  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie dataKey="value" isAnimationActive={false} data={data01} outerRadius={80} fill="#8884d8" label />
        <Tooltip />
      </PieChart>
      </ResponsiveContainer>
    );
  }
}
