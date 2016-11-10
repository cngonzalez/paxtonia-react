export function createGame() {
  var url = 'http://paxtonia-api.herokuapp.com/newgame'
  return function (dispatch) {
    fetch(url)
      .then(response => response.json())
      .then(json => dispatch(setId(json)))
  }
}



export function setId(json) {
  return {
    type: 'SET_ID',
    payload: json.id
  }
}

