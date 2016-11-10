import React from 'react'
import NPC from './NPC'
import Input from './input'

export default class Paxtonia extends React.Component { 
  render(){
    return (
    <div>
      I'm rendering
      <NPC />
      <Input />
    </div>
  )
  }
}
