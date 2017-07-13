const ACTIVATE_CATEGORY ='categoryButtons/ACTIVATE_CATEGORY'

export const activateCategory = categoryName => ({
  type: ACTIVATE_CATEGORY,
  categoryName
})
const initialState= {
  activeCategoryNames: []
}

export default (state= initialState, action ={}) => {
  switch(action.type){
    case ACTIVATE_CATEGORY:
      return {
        ...state,
        activeCategoryNames: state.activeCategoryNames.concat(action.categoryName)
      }
    default:
      return state
  }
}