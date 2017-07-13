const ACTIVATE_TECHNO_BUTTON='categoryButtons/ACTIVATE_TECHNO_BUTTON'
export const activateTechnoButton =() => ({
  type: ACTIVATE_TECHNO_BUTTON
})
const initialState= {
  activeTechnoButton: []
}



export default (state= initialState, action ={}) => {
  switch(action.type){
    case ACTIVATE_TECHNO_BUTTON:
      return {
        ...state,
        activeTechnoButton:['techno']
      }
    default:
      return state
  }
}