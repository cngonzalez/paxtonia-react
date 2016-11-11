export function storeGame(json) {
  return {
    type: 'SET_GAME',
    payload: json
  }
}

export const requestGame = () => ({
  type: 'FETCH_GAME'
})

export const createGame = () => (dispatch) => {
  dispatch(requestGame())
  var url = 'http://paxtonia-api.herokuapp.com/newgame'
  return fetch(url)
          .then(response => response.json())
          .then((json) => dispatch(storeGame(json)))
}


export function TalkToNPC(text, id) {
  var data = {game: {input: text}}
  var req = new Request(`http://paxtonia-api.herokuapp.com/games/#{id}/talk`, {method: 'POST', params: JSON.stringify(data)})
  return function(dispatch) {
   fetch(req).then(response => response.json())
    .then(response => response.json())
    .then(json => addResponse(json))
  }
}

export function addResponse(json) {
  return {
    type: 'ADD_TO_CONVO',
    payload: json
  }
}


