import React from 'react'
import { ContextConusmer } from '../../hooks/ContextProvider'

export const Buttons = () => {
  const { dispatchObj } = ContextConusmer()

  return (
    <>
      <button onClick={() => dispatchObj({ type: 'increment1', value: 1 })}>1</button>
      <button onClick={() => dispatchObj({ type: 'increment2', value: 2 })}>2</button>
      <button onClick={() => dispatchObj({ type: 'increment3', value: 3 })}>3</button>
      <button onClick={() => dispatchObj({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatchObj({ type: 'theme' })}>{`🌙=>🌞`}</button>
    </>
  )
}
