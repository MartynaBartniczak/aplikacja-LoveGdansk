import firebase from 'firebase'
import {initFavsSync} from './favevent'


const SYNC_USER = 'auth/SYNC_USER'


export const syncUser = (user) => ({
  type: SYNC_USER,
  user
})

export const initUserSync = () => dispatch => firebase.auth().onAuthStateChanged(
  user => {
    if (user) {
      dispatch(initFavsSync())
    }
    dispatch(syncUser(user))
  }
)

const initialState = {
  user: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SYNC_USER:
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}