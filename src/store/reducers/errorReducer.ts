import {GET_ERRORS} from '../types'

const initialState = {
    errors:[],
    loading:true
}

export default function(state = initialState, action: { type: any; payload: any }){

    switch(action.type){

        case GET_ERRORS:
        return {
            ...state,
            errors:action.payload,
            loading:false

        }
        default: return state
    }

}