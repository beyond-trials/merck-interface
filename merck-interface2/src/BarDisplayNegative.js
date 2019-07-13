import React from 'react';
import { ResponsiveBullet } from '@nivo/bullet';

function BarDisplay () {
    const data = [
        {
        "id": "",
        "ranges": [
            0,
            64,
            0,
            0,
            100
        ],
        "measures": [
            64
        ],
        "markers": [
            64
        ]
        }
    ]
    return (
            <ResponsiveBullet
            data={data}
            margin={{ top: 15, right: 90, bottom: 50, left: 20 }}
            spacing={100}
            titleAlign="start"
            titleOffsetX={-70}
            measureSize={0.2}
            rangeColors="red_grey"
            measureColors="blues"
            markerColors="blues"
            animate={true}
            motionStiffness={90}
            motionDamping={12}
             />   
    )
}
    
export default BarDisplay;