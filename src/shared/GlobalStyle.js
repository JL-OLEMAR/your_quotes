import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.font.primary};
    color: ${({ theme }) => theme.colors.grey};
    background: ${({ theme }) => theme.colors.black};
  }

  a {
    text-decoration: none;
  }

  .app {
    display: grid;
    min-height: 100vh;
    grid-template-rows: auto 1fr auto;
  }
`
