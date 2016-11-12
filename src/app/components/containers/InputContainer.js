import { connect } from 'react-redux'
import Input from '../input'
import { TalkToNPC, trackInput } from '../../actions/actions'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitClick: () => dispatch(TalkToNPC(ownProps.inputVal, ownProps.game_id)),
    trackChange: (val) => dispatch(trackInput(val))
  }
}

const InputContainer = connect(null, mapDispatchToProps)(Input)

export default InputContainer
