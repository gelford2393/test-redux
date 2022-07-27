import { DELETE_ANNOUNCEMENT } from '../types'

const initialState = {
    announcements: [],
    loading: true
}

export default function (state = initialState, action: { type: any; payload: any }) {
console.log(action.payload);

    switch (action.type) {

        case DELETE_ANNOUNCEMENT:
            const announcementDelete = state?.announcements?.filter((
                (item: any) => item.id !== action.payload
            ))
            return {
                ...state,
                announcements: announcementDelete,
                loading: false

            }
        default: return state
    }

}

