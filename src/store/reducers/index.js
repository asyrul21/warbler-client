import { combineReducers } from "redux";
import currentUser from "./currentUser"
import errors from "./errors"
import messages from "./messages"


// combining al reducers
const rootReducer = combineReducers({
    currentUser,
    errors,
    messages
})

export default rootReducer