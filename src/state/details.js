/**
 * Created by lukaszjeziorski on 10.07.17.
 */
const initialState = {
  value: 0
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        value: state.value + 1
      }
    case 'RESET':
      return initialState
    default:
      return state
  }
}