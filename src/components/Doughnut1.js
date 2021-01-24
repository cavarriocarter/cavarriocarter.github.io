import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Legend, ResponsiveContainer, Tooltip,
} from 'recharts';

const data01 = [
  { name: 'Law', value: 15 },
  { name: 'Tech/IT/Telecommunciations', value: 55 },
  { name: 'Insurance', value: 20 },
  { name: 'Energy Management', value: 10 },

];

const data02 = [
  { name: 'Group A', value: 2400 }, { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 }, { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 }, { name: 'Group F', value: 4800 },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/k9jkog04/';

  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie dataKey="value" isAnimationActive={false} data={data01} outerRadius={80} fill="#8884d8" label />
        <Pie dataKey="value" isAnimationActive={false} data={data01} outerRadius={80} fill="#8884d8" label />
        <Tooltip />
      </PieChart>
      </ResponsiveContainer>
    );
  }
}
