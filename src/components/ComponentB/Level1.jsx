import React from 'react'
import { Level2 } from './Level2'
import { Buttons } from './Buttons'


export const Level1 = () => {

  return (
    <div className='child a1'>
      <h4>Level 1</h4>
      <Buttons />
      <Level2 />
    </div>
  )
}
