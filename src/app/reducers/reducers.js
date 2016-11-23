//change shape of state -- instead of array of responses, have array of npc objects who in turn have many responses. Status updates will be harder to display, and should perhaps instead be a status bar below the text field

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

export function inputReducer(state="", action) {
  switch (action.type) {
   case 'TRACK_INPUT':
    return action.payload
   default:
    return state
  }
}
