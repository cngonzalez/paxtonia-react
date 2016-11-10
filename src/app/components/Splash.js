import React from 'react'
import { createGame } from '../actions/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router'

let Splash = ({dispatch}) => (
 <div>
   Click below to start a new game <br /> 
   <Link to="/game" onClick={() => dispatch(createGame())}>Enter</Link>
  </div>
)

Splash = connect()(Splash)

export default Splash
