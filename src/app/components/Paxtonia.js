import React from 'react'
import NPC from './NPC'
import InputContainer from './containers/InputContainer'
import { createGame } from '../actions/actions'
import { connect } from 'react-redux'

class Paxtonia extends React.Component {
  // componentDidMount() {
  //   if (!this.props.gameId){
  //     this.props.getGame()
  //   }
  // }
  render() {
    var npcs = this.props.responses.map((response, i) => <NPC response={response} key={i}/>)
    return (
        <div>
        You are a { this.props.hero_rep } hero. 
        { npcs }
         <InputContainer inputVal={this.props.inputVal} game_id={this.props.game_id} />  
       </div>
    )
  }
}


const mapStateToProps = (state) => { 
    return ({
      responses: state.responses,
      hero_rep: state.game.data.hero_reputation,
      game_id: state.game.data.id,
      inputVal: state.currentInput
      })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getGame: () => dispatch(createGame())
  })
}

const PaxtoniaContainer = connect(mapStateToProps, mapDispatchToProps)(Paxtonia)

export default PaxtoniaContainer
