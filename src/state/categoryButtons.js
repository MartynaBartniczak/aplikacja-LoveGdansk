const TOGGLE_CATEGORY ='categoryButtons/TOGGLE_CATEGORY'

export const toggleCategory = categoryName => ({
  type: TOGGLE_CATEGORY,
  categoryName
})
const initialState= {
  activeCategoryNames: []
}

export default (state= initialState, action ={}) => {
  switch(action.type){
    case TOGGLE_CATEGORY:
      return {
        ...state,
        activeCategoryNames: state.activeCategoryNames.includes(action.categoryName) ? state.activeCategoryNames.filter(
          categoryName => categoryName !== action.categoryName
        ): state.activeCategoryNames.concat(action.categoryName)
      }
    default:
      return state
  }
}