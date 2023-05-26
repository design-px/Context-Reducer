import React from 'react'
import { ContextConusmer } from '../../hooks/ContextProvider'

export const Buttons = () => {
  const { dispatch } = ContextConusmer()

  return (
    <>
      <button onClick={() => dispatch({ type: 'increment1', value: 1 })}>1</button>
      <button onClick={() => dispatch({ type: 'increment2', value: 2 })}>2</button>
      <button onClick={() => dispatch({ type: 'increment3', value: 3 })}>3</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  )
}
