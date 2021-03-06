import instance from "../../axios/axios"
import Cookies from "universal-cookie"
import bcrypt from "bcryptjs"
const cookie = new Cookies()
export const authSuccess = (token) => {
    console.log(token)
   localStorage.setItem('SSUID', token)
    return {
        type : 'AUTH_SUCCESS',
        token : token,
   
    }
}

export const authFail = (error) => {
    console.log(error)
    return {
        type : 'AUTH_FAIL',
        error : error
    }
} 

export const clear = () => {
    return {
        type : 'CLEAR'

    }
} 

export const otpClear = () => {
    return {
        type : 'OTP_CLEAR'

    }
} 

export const logout = () => {
    return {
        type : 'AUTH_LOGOUT',
     }
} 


export const authStart = () => {
    console.log("Auth Start")
  
    return {
        type : 'AUTH_START'
    }
}


export const authOtp = (otp) => {
    return {
        type : 'AUTH_OTP',
        otp : otp,
       
    }
}



export const otpverify = (event,otp) => {
    event.preventDefault()
    return (dispatch) => {
            let data = {
                token : cookie.get('SSUI_TEMP_KEY'),
                otp : otp,
                otp_crypt : cookie.get('SSU_KEY_ENC')
            }
            instance.post("/checkotp" , data)
            .then((response) => {
                console.log(response)
                dispatch(authSuccess(response.data))
                window.location.href = "https://cofounderv3.herokuapp.com/"
            })
            .catch((err) => {
                dispatch(authFail(err.response.data.error))
            })
        
    }
}
   

//companyName,location,headline,info,specializedIn


export const auth = (event, email, password, userName,img,companyName,location,headline,info,specializedIn,position,authenticatedWith) => {
    // event.preventDefault()
    console.log("From Auth")
    return (dispatch) => {
        dispatch(authStart())
        let data = {
            user : userName,
            password : password,
            email : email,
            img : img,
            location : location,
            specializedIn : specializedIn,
            companyName : companyName,
            generalInfo : info ,
            headline : headline,
            position : position,
            authenticatedWith:authenticatedWith

        }
   
            instance.post("/newuser" , data)
            .then((response) => {

                if(authenticatedWith === "Google") {
                    dispatch((authSuccess(response.data.tokenId)))
                    window.location.href = "https://cofounderv3.herokuapp.com/"
                }else {
                    dispatch((authOtp(response.data.otp)))
                    bcrypt.hash(response.data.otp , 2, (err, hashotp) => {
                        cookie.set('SSU_KEY_ENC' , hashotp)
                        cookie.set('SSUI_TEMP_KEY' , response.data.tokenId)
                    })
                }
                

              
               
            })
            .catch((err) => {
                dispatch((authFail(err.response.data.error)))
            })
        }
       
    } 

    export const login = (event, email, password) => {
        // event.preventDefault()
        console.log("From Auth")
        return (dispatch) => {
            dispatch(authStart())
            let data = {
               
                password : password,
                email : email
    
            }
       
                instance.post("/checkuser" , data)
                .then((response) => {
                    
                    console.log(response)
                    dispatch(authSuccess(response.data.tokenId))
                    window.history.back()
                   
                })
                .catch((err) => {
                    console.log(err.response)
                    dispatch((authFail(err.response.data.error)))
                })
            }
           
        } 
    
