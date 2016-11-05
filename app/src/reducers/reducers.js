export function gameStateReducer(state="NOT_STARTED", action) {
  switch (action.type) {
    case 'NOT_STARTED':
      return action.payload
    case 'IN_PROGRESS':
      return action.payload
    case 'COMPLETED':
      return action.payload
    default:
      return state  
  }
}

export function NPCReducer(state=[], action) {
  switch (action.type) {
    case 'ADD_TO_CONVO':
      return [...state, action.payload]
    default:
      return state
  }
}

export function UserReducer(state=[], action) {
  switch (action.type) {
    case 'ADD_TO_CONVO':
      return [...state, action.payload]
    default:
      return state
  }
}
