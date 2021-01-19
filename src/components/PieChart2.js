import React from 'react';
import { VictoryLabel, VictoryPie, VictoryTooltip } from 'victory';
import { Center } from "@chakra-ui/react"



class CustomLabel extends React.Component {
  render() {
    return (
      <g>
        <VictoryLabel {...this.props}/>
        <VictoryTooltip
          {...this.props}
          x={200} y={250}
          orientation="top"
          pointerLength={0}
          cornerRadius={50}
          flyoutWidth={100}
          flyoutHeight={100}
          flyoutStyle={{ fill: "black" }}
        />
      </g>
    );
  }
}

CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;

const PieChart1 = () => (

  <VictoryPie
    style={{ labels: { fill: "white" } }}
    innerRadius={100}
    labelRadius={120}
    labels={({ datum }) => `# ${datum.y}`}
    labelComponent={<CustomLabel />}
    colorScale={["tomato", "orange", "cyan", "gold", "navy" ]}
    data={[
      {x: "Law", y: 15},
      {x: "Telecom", y: 35},
      {x: "Tech", y: 35},
      {x: "Insurance", y: 15}
    ]}
    cornerRadius={({ datum }) => datum.y * 0.2}
    animate={{duration: 2000}}
    style={{ labels: { fill: "white", fontSize: 10, fontWeight: "bold" } }}


  />
)

export default PieChart1
