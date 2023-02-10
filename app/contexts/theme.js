import React from 'react'

const ThemeContex = React.createContext()

export default ThemeContex
export const ThemeConsumer = ThemeContex.Consumer
export const ThemeProvider = ThemeContex.Provider