import React from 'react';
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button'; 
import BarDisplay from './BarDisplay';
import BarDisplayNegative from './BarDisplayNegative';
import BarDisplayEfficacy from './BarDisplayEfficacy';
import BarDisplaySeverity from './BarDisplaySeverity';
import BarDisplayHappiness  from './BarDisplayHappiness'; 
import ChartDisplayComparison from './ChartDisplayComparison'; 
import ChartDisplayLonely from './ChartDisplayLonely'; 
import ChartDisplayDepressed from './ChartDisplayDepressed';
import ChartDisplayGoals from './ChartDisplayGoals';
import ChartDisplayContent from './ChartDisplayContent'; 
import ChartDisplayAgree from './ChartDisplayAgree'; 
import GeoMap from './GeoMap'; 
import AgePieMen from './AgePieMen'; 
import AgePieWomen from './AgePieWomen';
import citalopram from './citralopram.png';

function MercksBlockBusterDrug () {
    return (
        <div style={{height:"100%"}}>
            <div style={{marginLeft:"18px", marginTop: "20px"}}>
                <h1>Merck's Blockbuster sDrug</h1>
            </div>
            <div style={{marginLeft:"18px", marginTop: "40px", color:"purple"}}>
                <h4>General</h4>
            </div>
            {/* Beginning Card Drug Trial Meta Info*/}
            <div class="card mb-3" style={{ width: "90%", marginTop: "20px", marginLeft:"15px"}}>
                <div class="row no-gutters">
                    <div class="col-md-3">
                    <Image src="https://www.cryptonewsz.com/wp-content/uploads/2019/02/Dogecoin-DOGE-Price-Analysis-Feb.12.jpg" fluid style={{marginLeft:"20px", marginTop:"10px", marginBottom: "10px", width: "80%"}}/>
                    </div>
                    <div class="col-md-3">
                    <div class="card-body">
                        <h5 class="card-title">Merck's Blockbuster Drug</h5>
                        <p class="card-text">Agents</p>
                        <p class="card-text" style={{marginBottom: "5px"}}><small class="text-muted">Doge</small></p>
                    </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card-body">
                            <div class="row">
                                <h5 class="card-title"># Active Testers</h5>      
                            </div>
                            <div class="row">
                                <h3 style={{color:"purple"}}>2364</h3>
                            </div>  
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card-body">
                            <div class="row">
                                <h5 class="card-title">Testday</h5>  
                            </div>  
                            <div class="row">
                                <h3 style={{color:"purple"}}>11 / 90</h3>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            {/* Start Results  */}
            <div style={{marginLeft:"18px", marginTop: "40px", color:"purple"}}>
                <h2>Results Overview</h2>
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
            <div style={{marginLeft:"18px", marginTop: "8%", color:"purple"}}>
                <h2>ePRO Details</h2>
            </div>
            <div class="row" style={{marginTop:"4%", height:"100px", marginBottom:"5%"}}>
                <div class="col-md-6" style={{height:"90%"}}>
                    <h6 style={{color:"purple", marginLeft:"18px", marginTop:"10px"}}>On a scale of 1 to 7, 7 being the highest, how happy do you consider yourself?</h6>
                    <BarDisplayHappiness/>
                </div>
            </div>
            <div class ="row" style={{marginTop:"10%", height:'400px', marginBottom:'5%'}}>
                <div class="col-md-6" style={{ height:"400px" }}>
                    <h6 style={{color:"purple", marginLeft:"18px", marginTop:"40px"}}>How often do you feel lonely?</h6>
                    <ChartDisplayLonely/>
                </div>
                <div class="col-md-6" style={{ height:"400px" }}>
                    <h6 style={{color:"purple", marginLeft:"18px", marginTop:"40px"}}>Compare to your colleagues or friends, do you consider yourself happier than most of them?</h6>
                    <ChartDisplayComparison/>
                </div>
            </div>
            <div class ="row" style={{marginTop:"10%", height:'400px', marginBottom:'5%'}}>
                <div class="col-md-6" style={{ height:"400px" }}>
                    <h6 style={{color:"purple", marginLeft:"18px", marginTop:"40px"}}>How often do you feel depressed?</h6>
                    <ChartDisplayDepressed/>
                </div>
                <div class="col-md-6" style={{ height:"400px" }}>
                    <h6 style={{color:"purple", marginLeft:"18px", marginTop:"40px"}}>How often do you procrastinate about that status of your personal goals in life?</h6>
                    <ChartDisplayGoals/>
                </div>
            </div>
            <div class ="row" style={{marginTop:"10%", height:'400px', marginBottom:'5%'}}>
                <div class="col-md-6" style={{ height:"400px" }}>
                    <h6 style={{color:"purple", marginLeft:"18px", marginTop:"40px"}}>Please state your level of agreement for the following statements: I am content with the current state of my life! </h6>
                    <ChartDisplayContent/>
                </div>
                <div class="col-md-6" style={{ height:"400px" }}>
                    <h6 style={{color:"purple", marginLeft:"18px", marginTop:"40px"}}>Please state your level of agreement for the following statements: Currently, I don’t need to worry about the finances in my life.</h6>
                    <ChartDisplayAgree/>
                </div>
            </div>
            {/* Start DEMOGRAPHICS */}
            <div style={{marginLeft:"18px", marginTop: "10%", color:"purple"}}>
                <h2>Demographics</h2>
            </div>
             {/* AgePies */}
             <div class="row" style={{marginTop:"1%", height:"100px"}}>
                <div class="col-md-6" style={{height:"300px" }}>
                    <h4 style={{color:"purple", marginLeft:"18px", marginTop:"40px"}}>Women: 1064</h4>
                    <AgePieWomen/>
                </div>
                <div class="col-md-6" style={{height:"300px" }}>
                    <h4 style={{color:"purple", marginLeft:"18px", marginTop:"40px"}}>Men: 1300</h4>
                    <AgePieMen/>
                </div>
            </div>
            {/* Single Reports */}
            <div style={{marginLeft:"18px", marginTop: "30%", color:"purple"}}>
                <h4>PRO Details</h4>
            </div>
            {/* Single Report Card 1 */}
            <div class="card mb-3" style={{ width: "90%", marginTop: "20px", marginLeft:"15px"}}>
                <div class="row no-gutters">
                    <div class="col-md-2">
                        <div class="card-body" style={{marginLeft:"10px"}}>
                            <div class="row">
                                <h6 class="card-title">Age</h6>      
                            </div>
                            <div class="row">
                                <h6 style={{color:"grey"}}>24</h6>
                            </div>  
                            <div class="row">
                                <h6 class="card-title">Gender</h6>      
                            </div>
                            <div class="row">
                                <h6 style={{color:"grey"}}>Female</h6>
                            </div>  
                            <div class="row">
                                <h6 class="card-title">Country</h6>      
                            </div>
                            <div class="row">
                                <h6 style={{color:"grey"}}>Germany</h6>
                            </div> 
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="card-body">
                            <div class="row">
                                <h6 class="card-title">Overall Satisfaction</h6>      
                            </div>
                            <div class="row">
                                <h6 style={{color:"purple"}}>97%</h6>
                            </div>  
                            <div class="row">
                                <h6 class="card-title">Efficacy</h6>      
                            </div>
                            <div class="row">
                                <h6 style={{color:"purple"}}>100%</h6>
                            </div>  
                            <div class="row">
                                <h6 class="card-title">Ease of Use</h6>      
                            </div>
                            <div class="row">
                                <h6 style={{color:"purple"}}>Easy - minor complications</h6>
                            </div> 
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="card-body">
                            <div class="row">
                                <h6 class="card-title">SideEffects</h6>  
                            </div>  
                            <div class="row">
                                <h6 style={{color:"purple"}}>1</h6>
                            </div>  
                            <div class="row">
                                <h6 class="card-title">Intensity of SideEffect</h6>  
                            </div>  
                            <div class="row">
                                <h6 style={{color:"purple"}}>7/10</h6>
                            </div>  
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card-body" style={{marginLeft:"-10px"}}>
                            <div class="row">
                                <h6 class="card-title">Report</h6>  
                            </div>  
                            <div class="row">
                                <p style={{color:"purple"}}><small>Nach ca. 5 Monaten Citalopram setzten die NW ein. Genau das Gleiche hatte ich zwei Jahre zuvor mit Venlafaxin, zusätzlich noch Entzündungen im Mund. Damals war ich bei 12 Ärzten, es wurde das Sjögren Sandrom vermutet, ich musste sogar eine Biopsie über mich ergehen lassen. Da meine Psychiaterin nicht glaubte, habe ich es selbst ausgeschlichen und dann waren alle Symptome weg. Dafür bekam ich aber eine Psychose, da ich wohl zu schnell ausgeschlichen habe. Daraufhin Antipsychotika, die eine Depression auslösten mit starken Ängsten. Dann nahm ich aus Verzweiflung Citalopram - siehe oben. Wer hat das Gleiche mitgemacht? Wie kann man richtig ausschleichen? Meine jetzige Psychiaterin sagte in zwei Wochen!</small></p>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            {/* Single Report Card 2 */}
            <div class="card mb-3" style={{ width: "90%", marginTop: "20px", marginLeft:"15px"}}>
                <div class="row no-gutters">
                    <div class="col-md-2">
                        <div class="card-body" style={{marginLeft:"10px"}}>
                            <div class="row">
                                <h6 class="card-title">Age</h6>      
                            </div>
                            <div class="row">
                                <h6 style={{color:"grey"}}>19</h6>
                            </div>  
                            <div class="row">
                                <h6 class="card-title">Gender</h6>      
                            </div>
                            <div class="row">
                                <h6 style={{color:"grey"}}>Male</h6>
                            </div>  
                            <div class="row">
                                <h6 class="card-title">Country</h6>      
                            </div>
                            <div class="row">
                                <h6 style={{color:"grey"}}>Netherlands</h6>
                            </div> 
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="card-body">
                            <div class="row">
                                <h6 class="card-title">Overall Satisfaction</h6>      
                            </div>
                            <div class="row">
                                <h6 style={{color:"purple"}}>100%</h6>
                            </div>  
                            <div class="row">
                                <h6 class="card-title">Efficacy</h6>      
                            </div>
                            <div class="row">
                                <h6 style={{color:"purple"}}>100%</h6>
                            </div>  
                            <div class="row">
                                <h6 class="card-title">Ease of Use</h6>      
                            </div>
                            <div class="row">
                                <h6 style={{color:"purple"}}>10/10</h6>
                            </div> 
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="card-body">
                            <div class="row">
                                <h6 class="card-title">SideEffects</h6>  
                            </div>  
                            <div class="row">
                                <h6 style={{color:"purple"}}>None</h6>
                            </div>  
                            <div class="row">
                                <h6 class="card-title">Intensity of SideEffect</h6>  
                            </div>  
                            <div class="row">
                                <h6 style={{color:"purple"}}>-</h6>
                            </div> 
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card-body" style={{marginLeft:"-10px"}}>
                            <div class="row">
                                <h6 class="card-title">Report</h6>  
                            </div>  
                            <div class="row">
                                <p style={{color:"purple"}}><small>Nach einer für mich sehr traumatischen Beziehung zu einem Menschen mit Borderline Persönlichkeitsstörung, die ich nicht von Beginn an kannte, entwickelte ich eine „depressive Verstimmung“- Ständiges Kreisen der Gedanken um das Warum des Endes der Beziehung und die widersprüchlichen Signale an meine Personen schlauchten, laugten aus, ermüdeten und führten zu einer Abstumpfung. Als ich nicht mehr weiter wusste, da ging ich zum Psychiater, der mir Citalopram verschrieb. Ich war nicht sehr überzeugt von Psychopharmaka und glaubte auch nicht an eine wirkliche Wirkung. Ein Schlafmittel verschrieb mir der Psychiater ebenfalls. Letzteres ließ mich zwar zombiehaft erscheinen (jedenfalls fühlte ich mich so), aber endlich hörte das kreisen der Gedanken auf. Eine Wohltat! Die Wirkung des Citaloprams setzte bei mir nach ca. 10 Tagen ein...</small></p>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MercksBlockBusterDrug; 