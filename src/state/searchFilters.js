const UPDATE_LOCATION = 'searchFilters/UPDATE_LOCATION'
const UPDATE_SEARCH_DATE = 'searchFilters/UPDATE_SEARCH_DATE'

export const updateLocation = location => ({
  type: UPDATE_LOCATION,
  location
})

export const updateSearchDate = searchDate => ({
  type: UPDATE_SEARCH_DATE,
  searchDate
})


const initialState = {
  location: 1,
  searchDate: 0
}

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case UPDATE_LOCATION:
      return {
        ...state,
        location: action.location
      }
    case UPDATE_SEARCH_DATE:
      return {
        ...state,

      }
    default:
      return state
  }
}