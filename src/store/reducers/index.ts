import { combineReducers } from 'redux'
import announcementReducer from './announcementReducer'
import deleteAnnouncementReducer from './deleteAnnouncementReducer'
import deleteErrorReducer from './deleteErrorReducer'
import errorReducer from './errorReducer'

export default combineReducers({
  announcements: announcementReducer,
  errors: errorReducer,
  deleteError: deleteErrorReducer,
  deleteAnnouncement: deleteAnnouncementReducer
})