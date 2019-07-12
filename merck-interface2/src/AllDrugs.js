import React from 'react'; 
import Image from 'react-bootstrap/Image'; 

function AllDrugs () {
    return (
        <div class="card mb-3" style={{ width: "90%", marginTop: "20px", marginLeft:"15px"}}>
            <div class="row no-gutters">
                <div class="col-md-3">
                <Image src="https://shop.apotal.de/images/products/apotal/mittel/04114918_m.jpg" fluid style={{marginLeft:"20px", marginTop:"10px"}}/>
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
                        <h5 class="card-title">Rating</h5>
                    </div>
                    <div class="row">
                        <p class="card-text" style={{marginRight: "15px"}}>PRO1:</p>
                        <span class="fa fa-star" style={{color:"purple"}}></span>
                        <span class="fa fa-star" style={{color:"purple"}}></span>
                        <span class="fa fa-star" style={{color:"purple"}}></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>   
                    </div>    
                    <div class="row">
                        <p class="card-text" style={{marginRight: "15px"}}>PRO2:</p>
                        <span class="fa fa-star" style={{color:"purple"}}></span>
                        <span class="fa fa-star" style={{color:"purple"}}></span>
                        <span class="fa fa-star" style={{color:"purple"}}></span>
                        <span class="fa fa-star" style={{color:"purple"}}></span>
                        <span class="fa fa-star"></span>   
                    </div>    
                    <div class="row">
                        <p class="card-text" style={{marginRight: "15px"}}>PRO3:</p>
                        <span class="fa fa-star" style={{color:"purple"}}></span>
                        <span class="fa fa-star" style={{color:"purple"}}></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>   
                    </div>                              
                </div>
                </div>
                <div class="col-md-3">
                <div class="card-body">
                    <div class="row">
                        <h5 class="card-title">Total Ratings</h5>      
                    </div>
                    <div class="row">
                        <h1 style={{color:"purple"}}>562</h1>
                    </div>    
                </div>
                </div>
            </div>
        </div>
    )
}


export default AllDrugs; 