import React from 'react';
import { VictoryPie } from 'victory';

const PieChart1 = () => (

  <VictoryPie
    colorScale={["tomato", "orange", "cyan", "gold", "navy" ]}
    data={[
      {x: "Law", y: 15},
      {x: "Telecom", y: 35},
      {x: "Tech", y: 35},
      {x: "Insurance", y: 15}
    ]}
    cornerRadius={({ datum }) => datum.y * 0.2}
    animate={{duration: 2000}}
    padding={{ left: 70, right: 140 }}
    style={{ labels: { fill: "white", fontSize: 10, fontWeight: "bold" } }}

    labelPosition={({ index }) => index
  ? "centroid"
  : "Angle"
}
  />
)

export default PieChart1
