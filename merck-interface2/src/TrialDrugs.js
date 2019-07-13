import React from 'react'; 
import Image from 'react-bootstrap/Image'; 
import Button from 'react-bootstrap/Button'; 
import {Link} from 'react-router-dom';
import citralopram from  './citralopram.png';
import drug2 from './drug2.jpg';

function TrialDrugs () {
    return (
        <div>
            <div style={{marginLeft:"18px", marginTop: "20px"}}>
                <h1>Drugs on Trial Phase4</h1>
            </div>
            <div class="card mb-3" style={{ width: "90%", marginTop: "20px", marginLeft:"15px"}}>
                <div class="row no-gutters">
                    <div class="col-md-3">
                    <Image src={citralopram} fluid style={{marginLeft:"20px", marginTop:"10px", marginBottom: "10px"}}/>
                    </div>
                    <div class="col-md-3">
                    <div class="card-body">
                        <h5 class="card-title">Citalopram
                        </h5>
                        <p class="card-text">Components:</p>
                        <p class="card-text" style={{marginBottom: "5px"}}><small class="text-muted">Citalopram</small></p>
                        {/* <p class="card-text" style={{marginBottom: "5px"}}><small class="text-muted">Paroxetinv</small></p>
                        <p class="card-text" style={{marginBottom: "5px"}}><small class="text-muted">Excitalopram</small></p>
                        <p class="card-text" style={{marginBottom: "5px"}}><small class="text-muted">Fluoxetin</small></p> */}
                        <Link to="/citalopram">
                            <Button size="sm" color="purple" style={{marginTop:"12px"}}>See Details</Button>
                        </Link>
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
                            <h3 style={{color:"purple"}}>236</h3>
                        </div>  
                        <div class="row">
                            <h5 class="card-title">Launchyear</h5>  
                        </div>  
                        <div class="row">   
                            <h3 style={{color:"purple"}}>2014</h3>  
                        </div> 
                    </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3" style={{ width: "90%", marginTop: "20px", marginLeft:"15px"}}>
                <div class="row no-gutters">
                    <div class="col-md-3">
                    <Image src="https://www.cryptonewsz.com/wp-content/uploads/2019/02/Dogecoin-DOGE-Price-Analysis-Feb.12.jpg" fluid style={{marginLeft:"20px", marginTop:"10px", marginBottom: "10px", width: "90%"}}/>
                    </div>
                    <div class="col-md-3">
                    <div class="card-body">
                        <h5 class="card-title">Merck's Blockbuster Drug</h5>
                        <p class="card-text">Components:</p>
                        <p class="card-text" style={{marginBottom: "5px"}}><small class="text-muted">magic1</small></p>
                        <p class="card-text" style={{marginBottom: "5px"}}><small class="text-muted">magic2</small></p>
                        <Link to="/blockbuster">
                            <Button size="sm" color="purple" style={{marginTop:"12px"}}>See Details</Button>      
                        </Link> 
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
                            <h5 class="card-title">Active Participants</h5>      
                        </div>
                        <div class="row">
                            <h3 style={{color:"purple"}}>150</h3>
                        </div>  
                        <div class="row">
                            <h5 class="card-title">Launchyear</h5>  
                        </div>  
                        <div class="row">   
                            <h3 style={{color:"purple"}}>2019</h3>  
                        </div> 
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default TrialDrugs; 
