import React from 'react';
import { VictoryPie } from 'victory';


const PieChart1 = () => (

  <VictoryPie
    colorScale={["tomato", "orange", "cyan", "gold", "navy" ]}
    data={[
      {x: "Reporting/Data Analysis", y: 15},
      {x: "Phone Support", y: 20},
      {x: "Email", y: 30},
      {x: "Technical", y: 20}
    ]}
    cornerRadius={({ datum }) => datum.y * 0.2}
    animate={{duration: 2000}}
    padding={{ left: 80, right: 140 }}

  />
)

export default PieChart1
