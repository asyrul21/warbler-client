import { ADD_ERROR, REMOVE_ERROR } from "../actionTypes";

export const addError = (error) => ({
    type: ADD_ERROR,
    error
})

export const removeError = () => {
    return {
        type: REMOVE_ERROR,
        error: null
    }
}

export const removeErrorFromPage = () => {
    return dispatch => {
        return dispatch(removeError())
    }
}