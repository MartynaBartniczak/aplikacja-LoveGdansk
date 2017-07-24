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
    event => {
      const favs = event.val() || {}
      dispatch(favsSync(favs))
    }
  )
}

// export const favEvent = eventUid => dispatch => {
//   const userUid = firebase.auth().currentUser.uid
//   const ref = firebase.database().ref('favs/' + userUid + '/eventIds/' + eventUid)
//   ref.set(true)
// }

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