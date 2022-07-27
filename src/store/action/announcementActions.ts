import {GET_ANNOUNCEMENTS, GET_ERRORS, USERS_ERROR} from '../types'
import axios from 'axios'

export const getAnnouncements = () => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    
    try{
        const res = await axios.get(`http://localhost:3000/announcements`)
        dispatch( {
            type: GET_ANNOUNCEMENTS,
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
