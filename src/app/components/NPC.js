import React from 'react';

const NPC = ({response}) => (
   <div>
     You say: {response.input}<br />
     They say: {response.content}
  </div>
  )
export default NPC
