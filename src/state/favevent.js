import firebase from 'firebase'

const SYNC = 'favs/SYNC'

const favsSync= favs => ({
 type:SYNC,
  favs
})

export const initFavsSync = () => dispatch => {
  const userUid = firebase.auth().currentUser.uid
  firebase.database().ref('favs/' + userUid).on(
    'value',
    snapshot => {
      const favs = snapshot.val() || {}
      dispatch(favsSync(favs))
    }
  )
}

export const favEvent = eventId => dispatch => {
  const userUid = firebase.auth().currentUser.uid
  const ref = firebase.database().ref('favs/' + userUid + '/eventIds/' + eventId)
  ref.set(true)
}

export const removeEvent = eventId => dispatch => {
  const userUid = firebase.auth().currentUser.uid
  const ref = firebase.database().ref('favs/' + userUid + '/eventIds/' + eventId)
  ref.set(false)
}

const initialState = {
  eventIds: null
}


export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SYNC:
      return {
        ...state,
       eventIds: action.favs.eventIds || null
      }
    default:
      return state
  }
}