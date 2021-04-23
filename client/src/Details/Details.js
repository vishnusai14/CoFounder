import React, { Component } from "react"
import logo from "../assests/images/logo.png"
import Nav from "../nav/Nav"
import classes from "./Details.module.css"
import instance from "../axios/axios"
import Spinner from "../Spinner/Spinner"
 class Detail extends Component {
    state = {
        authenticatedWith : "",
        isLoading : true,
        username : "",
        img : null,
        isAdmin : false,
        email : ""
    }

    componentDidMount = () => {
        console.log("Mount")
      
        let token = localStorage.getItem('SSUID')
        console.log(token)
         
              let data = {
                  token : token
              }
            
              console.log(data)
              instance.post("/check" ,data)
              .then((response) => {
                 
                  if(response.data){
                    this.setState(prevState => ({
                      ...prevState,
                      isAdmin : true,
                      username : response.data.user.user,
                      email : response.data.user.email,
                      img : response.data.user.img,
                      isLoading:false,
                      authenticatedWith : response.data.user.authenticatedWith
      
                    }))
                  }
                  console.log(response)
              })
              .catch((err) => {
                  this.setState(prevState => ({
                    ...prevState,
                    isAdmin : false,
                    isLoading:false
      
                  }))
                 
                
              })
            
              console.log(this.state)
            
            
        
      }
      

    render() {

        let  class1 = ["row" , classes.profile]
        let class2 = [classes.margintop20, classes.profiledesclink]
        let element  = (
            <> 
                <div  className = {classes.container1}>
    <div  className={class1.join(" ")}>
		<div  className="col-md-3">
			<div  className={classes.profilesidebar}>
				<div  className={classes.profileuserpic}>
					<img src={logo}  className={classes.imgresponsive} alt="" />
				</div>
				<div  className={classes.profileusertitle}>
					<div  className={classes.profileusertitlename}>
						Jason Davis
					</div>
					<div  className={classes.profileusertitlejob}>
						Developer
					</div>
				</div>
				<div  className={classes.profileuserbuttons}>
					<button style = {{marginRight : "10px"}} type="button"  className="btn btn-success btn-sm">Message</button>
					<button type="button"  className="btn btn-danger btn-sm">Report</button>
				</div>
		
                                         <div>
                                                    <div  className={class2.join(" ")}>
                                                        <i  className="fab fa-twitter"></i>
                                                        <a href="https://www.twitter.com/jasondavisfl/">@jasondavisfl</a>
                                                    </div>
                                                    <div  className={class2.join(" ")}>
                                                        <i  className="fab fa-linkedin"></i>
                                                        <a href="https://www.linkedin.com/jasondavisfl/">@jasondavisfl</a>
                                                    </div>
                                                    <div  className={class2.join(" ")}>
                                                        <i  className="fab fa-facebook"></i>
                                                        <a href="https://www.facebook.com/">JasonDavisFL</a>
 </div></div>                  
                                           
        
        
			</div>
		</div>
		<div  className="col-md-9">
            <div  className={classes.profilecontent}>
			   <h3 style = {{textAlign : "left"}}>About Me :</h3>
               <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        
			   <h3 style = {{textAlign : "left"}}>My Skills :</h3>
               <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
		</div>
	</div>
</div>
            </>
        )
        
      
        return (
            this.state.isLoading ? <Spinner/> : this.state.isAdmin ? <> <Nav auth = {this.state.authenticatedWith} image = {this.state.img} isAdmin = {this.state.isAdmin} username = {this.state.username} /> {element} </> : 
            <><Nav auth = {this.state.authenticatedWith} image = {this.state.img} isAdmin = {this.state.isAdmin} username = "" /> {element} </>
          

        )
    }
}

export default Detail