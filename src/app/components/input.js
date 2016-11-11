import React from 'react'

const Input = (props) => {
  return (
    <div>
      <textarea rows="2" cols="65" id="input"  />
      <button onClick={() => props.onClick(document.getElementById('input').value)}>Submit</button>
    </div>
  )
}

export default Input
