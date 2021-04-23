const intialState = {
    token : null,
    otpCheck : false ,
    isLoading : false,
    error : null,
    
}

const reducer = (state = intialState , action) => {
    if(action.type === 'AUTH_OTP') {
        return {
            ...state,
            otpCheck : true,
            otp : action.otp,
            isLoading : false,
            token : action.token,
            error : null
        }
    }
    if(action.type === 'CLEAR') {
        return {
            ...state,
            error : null
        }
    }
    if(action.type === 'OTP_CLEAR') {
        return {
            ...state,
            otpCheck : false
        }
    }


    if(action.type === 'AUTH_START'){
     
        return {
            ...state,
            isLoading : true,
            error : null
        }
        
    }

    if(action.type === 'AUTH_LOGOUT') {
        return {
            ...state ,
            token : null 
        }
    }
  

    if(action.type === 'AUTH_SUCCESS'){
        return {
            ...state,
            isLoading: false,
            token : action.token,
           
        }
    }
 
    if(action.type === 'AUTH_FAIL'){
        return {
            ...state,
            isLoading : false,
            token : null,
            error : action.error,
            userId: null
        }
    }

    return state
}

export default reducer