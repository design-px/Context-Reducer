export const initialState = 0

export const reducer = (state, action) => {
  switch (action.type) {
    case 'increment1':
      return state + action.value
    case 'increment2':
      return state + action.value
    case 'increment3':
      return state + action.value
    case 'reset':
      return initialState
    default:
      return state
  }
}

export const initialObjState = {
  increment1: 1,
  increment2: 2,
  increment3: 3,
  theme: 'dark'
}

export const reducerObj = (state, action) => {
  switch (action.type) {
    case 'increment1':
      return { ...state, increment1: state.increment1 + action.value }
    case 'increment2':
      return { ...state, increment2: state.increment2 + action.value }
    case 'increment3':
      return { ...state, increment3: state.increment3 + action.value }
    case 'theme':
      return { ...state, theme: changeTheme(state.theme) }
    case 'reset':
      return { ...initialObjState, theme: changeTheme() }
    default:
      return state
  }
}


const changeTheme = (current) => {
  const body = document.querySelector('body')

  if (current === 'dark') {
    body.classList.replace('dark', 'light')
    return current = 'light'
  } else {
    body.classList.replace('light', 'dark')
    return current = 'dark'
  }
}
