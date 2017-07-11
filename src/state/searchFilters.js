const UPDATE_LOCATION = 'searchFilters/UPDATE_LOCATION'
const UPDATE_TIME = 'searchFilters/UPDATE_TIME'

export const updateLocation = location => ({
  type: UPDATE_LOCATION,
  location
})


const initialState = {
  location: 1,
  time: 0
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case UPDATE_LOCATION:
      return {
        ...state,
        location: action.location
      }
    default:
      return state
  }
}