import React from 'react';
import ReactOnRails from 'react-on-rails';

const NPC = (props) => {
  console.log(props)
  return (
   <div>
     My stats are {props.stats.id} {props.stats.name} {props.stats.personality}. I say to thee: <br/>
     {props.output}
   </div>
  )
}
export default NPC
