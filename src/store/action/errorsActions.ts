import {GET_ERRORS, USERS_ERROR} from '../types'
import axios from 'axios'

export const getErrors = () => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    
    try{
        const res = await axios.get(`http://localhost:3000/errors`)
        dispatch( {
            type: GET_ERRORS,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
    }

}