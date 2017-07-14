const ADD = 'calendarAdd/ADD'

export const add = (eventId, startDate) => ({
    type: ADD,
    eventId
})

const initialState = {
    favouriteEventId: []
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                favouriteEventId: state.favouriteEventId.filter(
                    eventId => action.eventId !== eventId
                ).concat(action.eventId)
            }
        default:
            return state
    }
}
