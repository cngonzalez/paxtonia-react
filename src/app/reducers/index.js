import { combineReducers } from 'redux'
import { responseReducer, gameReducer, inputReducer } from './reducers'

const PaxtoniaReducers = combineReducers({
  responses: responseReducer,
  game: gameReducer,
  currentInput: inputReducer
})

export default PaxtoniaReducers
