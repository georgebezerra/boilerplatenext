import theme from 'styles/theme'

//inferência de tipos
type Theme = typeof theme

declare module 'styled-components' {
  // export type DefaultTheme extends Theme {}
}
