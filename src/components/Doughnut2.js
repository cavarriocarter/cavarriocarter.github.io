import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Legend, ResponsiveContainer, Tooltip,
} from 'recharts';

const data01 = [
  { name: 'Email', value: 30 },
  { name: 'IoT Troubleshooting', value: 25 },
  { name: 'Phone', value: 20 },
  { name: 'Salesforce Administration', value: 15 },
  { name: 'Networking', value: 10 },

];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/k9jkog04/';

  render() {
    return (
      <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie dataKey="value" isAnimationActive={false} data={data01} outerRadius={80} fill="#26bf33" label />
        <Tooltip />
      </PieChart>
      </ResponsiveContainer>
    );
  }
}
