import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    src: local('Raleway'), url('/fonts/Raleway-Regular.woff2') format('woff2'),
      url('/fonts/Raleway-Regular.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    src: local('Raleway'), url('/fonts/Raleway-Bold.woff2') format('woff2'),
      url('/fonts/Raleway-Bold.woff') format('woff');
    font-display: swap;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${({ theme }) => theme.font.primary};
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.grey};
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
