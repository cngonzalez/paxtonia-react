import React, {PropTypes} from 'react';

class App extends React.Component {
  render() {
    return (
       <div>
         <h1>Paxtonia</h1>
         <h3>A candy shell for irresponsible AI</h3>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
