import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Legend, ResponsiveContainer, Tooltip,
} from 'recharts';

const data01 = [
  { name: 'Email', value: 25 },
  { name: 'Software Troubleshooting', value: 40 },
  { name: 'Phone', value: 20 },
  { name: 'Reporting', value: 10 },
  { name: 'Scripting', value: 5 },

];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/k9jkog04/';

  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie dataKey="value" isAnimationActive={false} data={data01} outerRadius={80} fill="#1f7fed" label />
        <Tooltip />
      </PieChart>
      </ResponsiveContainer>
    );
  }
}
