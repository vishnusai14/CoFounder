import React , { Component } from "react"
import { Link } from "react-router-dom"
import classes from  "./SearchResult.module.css"
import test from "../assests/images/logo.png"
import Header from "../Header/Header"
class CoWorkers extends Component {
    state = {
        coworkers : [
        {id : 1 ,name : "Vishnu Prasanna",skills: ["Web Deloper", "Designer"],address : "1129 , SomeStreet"},
        {id : 2 ,name : "Vishnu Prasanna",skills: ["Web Deloper", "Designer"],address : "1129 , SomeStreet"},
        {id : 3 ,name : "Vishnu Prasanna",skills: ["Web Deloper", "Designer"],address : "1129 , SomeStreet"},
        {id : 4 ,name : "Vishnu Prasanna",skills: ["Web Deloper", "Designer"],address : "1129 , SomeStreet"},
        {id : 5 ,name : "Vishnu Prasanna",skills: ["Web Deloper", "Designer"],address : "1129 , SomeStreet"},
        {id : 6 ,name : "Vishnu Prasanna",skills: ["Web Deloper", "Designer"],address : "1129 , SomeStreet"},
        {id : 7 ,name : "Vishnu Prasanna",skills: ["Web Deloper", "Designer"],address : "1129 , SomeStreet"},
        {id : 8 ,name : "Vishnu Prasanna",skills: ["Web Deloper", "Designer"],address : "1129 , SomeStreet"},
        {id : 9 , name : "Vishnu Prasanna",skills: ["Web Deloper", "Designer"],address : "1129 , SomeStreet"}
    ]
    }

    render() {
        return (
            <>
            <Header/>
            <div className = {classes.container2}>
            <a className= {classes.anchorsendall} href="#"><span>Send Message To Selected</span></a>
            <div className="container">
                {this.state.coworkers.map((e) => {
                    return (
                                <div style = {{marginTop : "20px" , marginBottom : "20px"}} className={classes.selectionwrapper} key = {e.id}>
                               
                                <label htmlFor={e.id} className={classes.selectedlabel}>
                                    <input type="checkbox" name="selected-item" id={e.id} />
                                    <span className={classes.icon}></span>
                                                     
                                    <div style = {{ backgroundColor: "transparent" , border: "none"}} className="card">
                                        <div className="card-wrapper">
                                            <div style = {{display : "flex", alignItems : "left"}} className="row align-items-center">
                                                <div className="col-12 col-md-4">
                                                    <div style = {{width : "fit-content" , backgroundColor : "white" , borderRadius : "50%"}} className="image-wrapper">
                                                        <img  src={test} alt="Mobirise" />
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md">
                                                    <div style = {{width: "100%"}} className="card-box">
                                                        <h6 style = {{ lineHeight: "1" , wordBreak: "break-word", wordWrap: "break-word", fontWeight: "400"}} className="card-title mbr-fonts-style m-0 display-5">
                                                            <strong>{e.name}</strong>
                                                        </h6>
                            
                                                       <ul className = {classes.details}>
                                                           <li className = {classes.detail}>
                                                           <i style = {{marginRight : "5px"}} className="fas fa-thumbtack"></i>{e.address}
                                                           </li>
                                                           <li className = {classes.detail}>
                                                           <i style = {{marginRight : "5px"}} className="far fa-star"></i> 5
                                                           </li>
                                                           <li className = {classes.detail}>
                                                           <i style = {{marginRight : "5px"}} className="fas fa-drafting-compass"></i>{e.skills.join(",")}
                                                           </li>
                                                       </ul>
                                                        
                                                        <div  style = {{ lineHeight: "1" , wordBreak: "break-word", wordWrap: "break-word", fontWeight: "400"}} className="social-row display-7">
                                                            
                                                            <div className = {classes.btn}>
                                                                <Link to = "/worker-details" className = {classes.anchor}>View Profile</Link>
                                                                <a className ={classes.anchor}>Send Message</a>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  
                                </label>
                                <hr/>                                
                            </div>
                                                )
                })}
            </div>
            </div>

           
            
          </>
        )
    }
}

export default CoWorkers