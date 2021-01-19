import React from 'react';
import { VictoryChart, VictoryContainer, VictoryLabel, VictoryLegend, VictoryPie, VictoryTooltip } from 'victory';
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
          flyoutStyle={{ fill: "gray" }}
          activateData={false}
        />
      </g>
    );
  }
}


CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;

const PieChart1 = () => (

  <VictoryPie
    innerRadius={100}
    labelRadius={120}
    labelComponent={<CustomLabel />}
    colorScale={["tomato", "orange", "cyan", "gold", "navy" ]}
    data={[
      {x: "Legal", y: 15},
      {x: "Telecom", y: 35},
      {x: "Tech", y: 35},
      {x: "Insurance", y: 15}
    ]}
    cornerRadius={({ datum }) => datum.y * 0.2}
    animate={{duration: 2000}}
    style={{ labels: { fill: "white", fontSize: 6, fontWeight: "bold" } }}
    containerComponent={
      <VictoryContainer
        responsive={true}/>
    }
  />

)

export default PieChart1
