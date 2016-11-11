import Paxtonia from '../Paxtonia'
import { connect } from 'react-redux'


const mapStateToProps = (state) => { 
    return ({
      opacity: (state.game.isFetching) ? .5 : 1,
      responses: state.responses,
      hero_rep: state.game.data.hero_reputation,
      })
}

const PaxtoniaContainer = connect(mapStateToProps)(Paxtonia)

export default PaxtoniaContainer

