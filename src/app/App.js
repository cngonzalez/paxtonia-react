import React, {PropTypes} from 'react';
import { connect } from 'react-redux'

let App = (props) => (
  <div>
     <h1>Paxtonia</h1>
     <h3>A candy shell for irresponsible AI</h3>
    {(props.loading) ? "Loading!" : props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  loading: state.game.isFetching
})

App = connect(mapStateToProps)(App)

export default App;
