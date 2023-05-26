import React from 'react'
import { Level1 } from './Level1'
import { ContextConusmer } from '../../hooks/ContextProvider'

export const ComponentB = () => {

  const { obj: { increment1, increment2, increment3, theme } } = ContextConusmer()

  return (
    <div className='component'>

      <div className="parent">
        <h2>Increment Feature - with Object</h2>
        <div className='parent__header'>
          <h3>Component B</h3>
          <pre style={{ fontSize: '1.2rem' }}>
            {`value {
    increment1 : ${increment1}
    increment2 : ${increment2}
    increment3 : ${increment3}
    theme : ${theme}
}`}</pre>
        </div>
      </div>

      <Level1 />
    </div>
  )
}
