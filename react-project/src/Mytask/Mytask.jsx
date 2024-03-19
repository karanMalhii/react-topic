import React from 'react'

export default function Mytask({NewFunc}) {
  return (
    <div>
      <input onChange={(myevent) => NewFunc(myevent)}/>
    </div>
  )
}
