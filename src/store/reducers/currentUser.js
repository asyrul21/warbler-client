import { SET_CURRENT_USER } from "../actionTypes"

const DEFAULT_STATE = {
    isAuthenticated: false, // if user is authenticated
    user: {} // user info after log in
}

export default (state=DEFAULT_STATE, action) => {
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                // turn empty object into false or if there are keys, true
                isAuthenticated: !!Object.keys(action.user).length,
                user: action.user
            }
        default:
            return state
    }
}