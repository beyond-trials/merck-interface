import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

function ChartDisplayGoals() {
    const data = [
        {
          "country": "Always",
          "Always": 50,
          "hot dogColor": "hsl(220, 70%, 50%)",
        },
        {
          "country": "Very Often",
          "Very Often": 30,
          "burgerColor": "hsl(125, 70%, 50%)"
        },
        {
            "country": "Sometimes",
            "Sometimes": 18,
            "burgerColor": "hsl(125, 70%, 50%)"
        },
        {
            "country": "Rarely",
            "Rarely": 2,
            "burgerColor": "hsl(125, 70%, 50%)"
        },
        {
            "country": "Never",
            "Never": 0,
            "burgerColor": "hsl(125, 70%, 50%)"
        }
    ]
    return (
          <ResponsiveBar
        data={data}
        keys={[ 'Always', 'Very Often', 'Sometimes', 'Rarely', 'Never' ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: 'reds' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'From 150 current Testers (%)',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
    )
}
  
    
export default ChartDisplayGoals;