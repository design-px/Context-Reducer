import React from 'react'
import { Level1 } from './Level1'
import { ContextConusmer } from '../../hooks/ContextProvider'

export const ComponentA = () => {

  const { increment } = ContextConusmer()

  return (
    <div className='component'>

      <div className="parent">
        <h2>Increment Feature - with variable</h2>
        <div className='parent__header'>
          <h3>Component A</h3>
          <p>value - {increment}</p>
        </div>
      </div>

      <Level1 />
    </div>
  )
}
