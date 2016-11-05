import React from 'react'

export default class Splash extends React.Component {
constructor(props) {
  super(props)
}
componentWillMount() {
  fetch('vast-fjord-17533.herokuapp.com/wakeup')
}
render(){
  return ( 
 <div>
    Click below to start a new game
    <button onClick ={(e) => props.start } value="Start!" />
  </div>
  )
}

