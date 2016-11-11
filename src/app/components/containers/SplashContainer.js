import { connect } from 'react-redux'
import { createGame } from '../../actions/actions'
import Splash from '../Splash'

const mapDispatchToProps = (dispatch) => {
  return {
    gameClick: () => dispatch(createGame())
  }
}

const SplashContainer = connect(null, mapDispatchToProps)(Splash)

export default SplashContainer
