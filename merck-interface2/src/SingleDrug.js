import React from 'react';
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button'; 


function SingleDrug () {
    return (
        <div>
            <div style={{marginLeft:"18px", marginTop: "20px"}}>
                <h1>Antidepressant #</h1>
            </div>
            <div style={{marginLeft:"18px", marginTop: "40px", color:"purple"}}>
                <h4>General</h4>
            </div>
            <div class="card mb-3" style={{ width: "90%", marginTop: "20px", marginLeft:"15px"}}>
                <div class="row no-gutters">
                    <div class="col-md-3">
                    <Image src="https://shop.apotal.de/images/products/apotal/mittel/04114918_m.jpg" fluid style={{marginLeft:"20px", marginTop:"10px", marginBottom: "10px"}}/>
                    </div>
                    <div class="col-md-3">
                    <div class="card-body">
                        <h5 class="card-title">Aspirin Complex</h5>
                        <p class="card-text">Components:</p>
                        <p class="card-text" style={{marginBottom: "5px"}}><small class="text-muted">Acetylsalicylsäure</small></p>
                        <p class="card-text" style={{marginBottom: "5px"}}><small class="text-muted">Pseudoephedrinhydrochlorid</small></p>
                    </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card-body">
                            <div class="row">
                                <h5 class="card-title">Total Ratings</h5>      
                            </div>
                            <div class="row">
                                <h3 style={{color:"purple"}}>562</h3>
                            </div>  
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card-body">
                            <div class="row">
                                <h5 class="card-title">Launchyear</h5>  
                            </div>  
                            <div class="row">
                                <h3 style={{color:"purple"}}>2016</h3>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            <div style={{marginLeft:"18px", marginTop: "40px", color:"purple"}}>
                <h4>Results</h4>
            </div>
            <div class="card mb-3" style={{ width: "90%", marginTop: "20px", marginLeft:"15px"}}>
                <div class="row no-gutters">
                        <div class="col-md-3">
                            <div class="card-body">
                                <div class="row">
                                    <h5 class="card-title">Total Ratings</h5>      
                                </div>
                                <div class="row">
                                    <h3 style={{color:"purple"}}>562</h3>
                                </div>  
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default SingleDrug; 