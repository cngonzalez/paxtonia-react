export function responseReducer(state=[], action) {
  switch (action.type) {
    case 'ADD_TO_CONVO':
      return [...state, action.payload]
    default:
      return state
  }
}

export function gameReducer(state = {isFetching: false, data: {}}, action) {
  switch (action.type) {
    case 'SET_GAME':
      return {isFetching: false, data: action.payload}
    case 'FETCH_GAME':
      return {...state, isFetching: true}
    default:
      return state
  }
}

