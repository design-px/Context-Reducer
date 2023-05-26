import { createContext, useContext, useReducer } from "react"
import { initialState, initialObjState, reducer, reducerObj } from "./reducer"

const Context = createContext()

export const ContextProvider = ({ children }) => {

  const [increment, dispatch] = useReducer(reducer, initialState)

  const [obj, dispatchObj] = useReducer(reducerObj, initialObjState)

  return <Context.Provider value={{ increment, dispatch, obj, dispatchObj }} >{children}</Context.Provider>
}

export const ContextConusmer = () => useContext(Context)
