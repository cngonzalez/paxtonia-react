import Paxtonia from '../Paxtonia'
import { connect } from 'react-redux'


const mapStateToProps = (state) => { 
    return ({
      responses: state.responses,
      hero_rep: state.game.data.hero_reputation,
      })
}

const PaxtoniaContainer = connect(mapStateToProps)(Paxtonia)

export default PaxtoniaContainer

