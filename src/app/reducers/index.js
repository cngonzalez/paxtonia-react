import { combineReducers } from 'redux'
import { gameStateReducer, NPCReducer, UserReducer, gameIdReducer } from './reducers'

const PaxtoniaReducers = combineReducers({
  gameState: gameStateReducer,
  NPCSaid: NPCReducer,
  UserSaid: UserReducer,
  gameId: gameIdReducer
})

export default PaxtoniaReducers
