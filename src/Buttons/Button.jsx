import React from 'react'

export default function Button({classname ,text}) {
  return (
    <button className= {classname}>
        {text}
    </button>
  )
}
