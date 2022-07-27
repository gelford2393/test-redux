import { DELETE_ERRORS } from '../types'

const initialState = {
    errors: [],
    loading: true
}

export default function (state = initialState, action: { type: any; payload: any }) {


    switch (action.type) {

        case DELETE_ERRORS:
            const errorDelete = state?.errors?.filter((
                (item: any) => item.id !== action.payload
            ))
            return {
                ...state,
                errors: errorDelete,
                loading: false

            }
        default: return state
    }

}

