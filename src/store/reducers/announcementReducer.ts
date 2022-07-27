import { GET_ANNOUNCEMENTS } from '../types'

const initialState = {
    announcements:[],
    loading:true
}

export default function(state = initialState, action: { type: any; payload: any }){

    switch(action.type){

        case GET_ANNOUNCEMENTS:
        return {
            ...state,
            announcements:action.payload,
            loading:false

        }
        default: return state
    }

}
