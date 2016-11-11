import { connect } from 'react-redux'
import Input from '../input'
import TalkToNPC from '../../actions/actions'

const mapStateToProps = (state) => {
  return {
    gameId: state.game.id
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (text) => dispatch(TalkToNPC(text, ownProps.gameId))
  }
}


const InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input)

export default InputContainer
