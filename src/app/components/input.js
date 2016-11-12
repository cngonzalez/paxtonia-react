import React from 'react'

const Input = (props) => {
  return (
    <div>
      <textarea rows="2" cols="65" value={props.inputVal}  onChange={(e) => props.trackChange(e.target.value)} />
      <button onClick={() => props.submitClick()}>Submit</button>
    </div>
  )
}

export default Input
