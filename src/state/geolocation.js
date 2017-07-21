const SET = 'geolocation/SET';

export const set = (position) => ({
  type: SET,
  position
});

const initialState = {
  position: null
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET:
      return {
        position: action.position
      };
    default:
      return state
  }
}