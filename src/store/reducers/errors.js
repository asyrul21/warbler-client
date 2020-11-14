import { removeError } from "../actions/errors";
import { ADD_ERROR, REMOVE_ERROR } from "../actionTypes"

// export a function
export default (state = {message: null}, action) => {
    console.log("Action:", action);
    switch(action.type){
        case ADD_ERROR:
            console.log("Adding error:");
            console.log(action);
            return { ...state, message: action.error}
        case REMOVE_ERROR:
            console.log("removing error:");
            console.log(action);
            return { ...state, message: null}
        default:
            return state;
    }
}