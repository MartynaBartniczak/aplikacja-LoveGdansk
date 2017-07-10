import {createStore} from 'redux'

const reducer = (state, action) => {
  console.log(state, action)
  return state
}
const store = createStore (reducer)

store.dispatch ({
  type: 'HELLO'
})

export default store