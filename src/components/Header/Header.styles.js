import styled from 'styled-components'

export const HeaderContainer = styled.header`
  margin: 40px 0;
  text-align: center;

  h1 {
    font-size: 18px;

    @media screen and (min-width: 1024px) {
      font-size: 24px;
    }
  }

  a {
    font-size: ${({ theme }) => theme.sizes.xl};
    color: ${({ theme }) => theme.colors.primary};
  }
`
