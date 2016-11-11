import { combineReducers } from 'redux'
import { responseReducer, gameReducer } from './reducers'

const PaxtoniaReducers = combineReducers({
  responses: responseReducer,
  game: gameReducer,
})

export default PaxtoniaReducers
