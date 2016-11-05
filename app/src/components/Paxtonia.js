import React from 'react'
import NPC from './npc'
import Input from './input'

export default class Paxtonia extends React.Component { 
  render(){
    return (
    <div>
      <NPC stats={this.props} output={this.state.currentOutput} />
      <Input />
    </div>
  )
  }
}
