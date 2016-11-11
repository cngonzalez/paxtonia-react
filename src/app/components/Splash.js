import React from 'react'
import { Link } from 'react-router'

let Splash = (props) => { 
  return (
    <div>
      Click below to start a new game <br /> 
      <Link to="/game" onClick={props.gameClick}>Enter</Link>
    </div>
  )
 }

export default Splash

