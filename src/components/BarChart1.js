import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { Container } from "@chakra-ui/react"


const data = [
  {
    name: 'Medecision', Email: 35, Phone: 25, Software: 30, Programming: 15
  },
  {
    name: 'Entouch', Email: 25, Phone: 20, Software: 5, Hardware: 35, Salesforce: 15
  },
  {
    name: 'NCR', Email: 45, Phone: 20, Reporting: 25, Software: 10
  }
];

export default class Example extends PureComponent {

  render() {
    return (
      <div style={{ width: '100%', height: 600 }}>
        <ResponsiveContainer>
          <BarChart
                  data={data}
                  margin={{
                    top: 20, right: 30, left: 20, bottom: 35,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis type="number" domain={[0, 'dataMax + 20']} />
                  <Tooltip />
                  <Legend iconType="circle" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
                  <Bar dataKey="Email" stackId="a" fill="#af00db" />
                  <Bar dataKey="Phone" stackId="a" fill="#4ed147" />
                  <Bar dataKey="Software" stackId="a" fill="#e64949" />
                  <Bar dataKey="Hardware" stackId="a" fill="#d1cc47" />
                  <Bar dataKey="Salesforce" stackId="a" fill="#407ac9" />
                  <Bar dataKey="Reporting" stackId="a" fill="#e3a617" />



                </BarChart>
    </ResponsiveContainer>
    </div>
    );
  }
}
