import React from 'react';
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button'; 
import BarDisplay from './BarDisplay';
import BarDisplayNegative from './BarDisplayNegative';
import BarDisplayEfficacy from './BarDisplayEfficacy';
import BarDisplaySeverity from './BarDisplaySeverity';
import GeoMap from './GeoMap'; 
import AgePieMen from './AgePieMen'; 
import AgePieWomen from './AgePieWomen';
import citalopram from './citralopram.png';

function Citalopram () {
    return (
        <div style={{height:"100%"}}>
            <div style={{marginLeft:"18px", marginTop: "20px"}}>
                <h1>Citalopram</h1>
            </div>
            <div style={{marginLeft:"18px", marginTop: "40px", color:"purple"}}>
                <h4>General</h4>
            </div>
            <div class="card mb-3" style={{ width: "90%", marginTop: "20px", marginLeft:"15px"}}>
                <div class="row no-gutters">
                    <div class="col-md-3">
                    <Image src={citalopram} fluid style={{marginLeft:"20px", marginTop:"10px", marginBottom: "10px"}}/>
                    </div>
                    <div class="col-md-3">
                    <div class="card-body">
                        <h5 class="card-title">Antidepressiva</h5>
                        <p class="card-text">Agents</p>
                        <p class="card-text" style={{marginBottom: "5px"}}><small class="text-muted">Citalopram</small></p>
                    </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card-body">
                            <div class="row">
                                <h5 class="card-title"># Testers</h5>      
                            </div>
                            <div class="row">
                                <h3 style={{color:"purple"}}>264</h3>
                            </div>  
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card-body">
                            <div class="row">
                                <h5 class="card-title">Testday</h5>  
                            </div>  
                            <div class="row">
                                <h3 style={{color:"purple"}}>30 / 90</h3>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            {/* Start Results  */}
            <div style={{marginLeft:"18px", marginTop: "40px", color:"purple"}}>
                <h2>Results</h2>
            </div>
            <div class="row" style={{height:"100px"}}>
                <div class="col-md-6" style={{height:"90%" }}>
                    <h4 style={{color:"purple", marginLeft:"18px", marginTop:"40px"}}>Overall Satisfaction</h4>
                    <BarDisplay/>
                </div>
                <div class="col-md-6" style={{ height:"90%" }}>
                    <h4 style={{color:"purple", marginLeft:"18px", marginTop:"40px"}}>Efficacy</h4>
                    <BarDisplayEfficacy/>
                </div>
            </div>
            <div class="row" style={{marginTop:"5%", height:"100px"}}>
                <div class="col-md-6" style={{height:"90%" }}>
                    <h4 style={{color:"purple", marginLeft:"18px", marginTop:"40px"}}>Severity of Side Effects</h4>
                    <BarDisplayNegative/>
                </div>
                <div class="col-md-6" style={{ height:"90%" }}>
                    <h4 style={{color:"purple", marginLeft:"18px", marginTop:"40px"}}>Severity of Side Effects</h4>
                    <BarDisplaySeverity/>
                </div>
            </div>
            {/* Start DEMOGRAPHICS */}
            <div style={{marginLeft:"18px", marginTop: "10%", color:"purple"}}>
                <h2>Demographics</h2>
            </div>
             {/* AgePies */}
             <div class="row" style={{marginTop:"1%", height:"100px"}}>
                <div class="col-md-6" style={{height:"300px" }}>
                    <h4 style={{color:"purple", marginLeft:"18px", marginTop:"40px"}}>Women: 122</h4>
                    <AgePieWomen/>
                </div>
                <div class="col-md-6" style={{height:"300px" }}>
                    <h4 style={{color:"purple", marginLeft:"18px", marginTop:"40px"}}>Men:  144</h4>
                    <AgePieMen/>
                </div>
            </div>
        </div>
    )
}

export default Citalopram; 