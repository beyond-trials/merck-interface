import React from 'react';
import { ResponsiveBullet } from '@nivo/bullet';

function BarDisplaySeverity () {
    const data = [
        {
        "id": "",
        "ranges": [
            0,
            30,
            0,
            0,
            100
        ],
        "measures": [
            30
        ],
        "markers": [
            30
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
            rangeColors="purple_red"
            measureColors="spectral"
            markerColors="spectral"
            animate={true}
            motionStiffness={90}
            motionDamping={12}
             />   
    )
}
    
export default BarDisplaySeverity;