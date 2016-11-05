import { combineReducers } from 'redux'

const PaxtoniaReducers = combineReducers({
  gameState: gameStateReducer,
  NPCSaid: NPCReducer,
  UserSaid: UserReducer
})

export default PaxtoniaReducers
