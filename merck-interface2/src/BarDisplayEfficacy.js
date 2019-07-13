import React from 'react';
import { ResponsiveBullet } from '@nivo/bullet';

function BarDisplayEfficacy () {
    const data = [
        {
        "id": "",
        "ranges": [
            0,
            72,
            0,
            0,
            100
        ],
        "measures": [
            72
        ],
        "markers": [
            72
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
            measureColors="blues"
            markerColors="blues"
            animate={true}
            motionStiffness={90}
            motionDamping={12}
             />   
    )
}
    
export default BarDisplayEfficacy;