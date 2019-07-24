import *as ActionTypes from '../Action/type'

const initialstate = {
    message: ''


};
export default (state = initialstate, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_REGISTER_SUCCESS: {

            return { ...state,message:"Register Successfull" }
        }

        default:
            return state;
    }
}