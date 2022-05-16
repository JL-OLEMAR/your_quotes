import styled from 'styled-components'

export const FooterContainer = styled.footer`
  margin: 60px 0 20px;
  text-align: center;
  font-size: ${({ theme }) => theme.sizes.s};
  color: ${({ theme }) => theme.colors.grey};

  a {
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      text-decoration: underline;
    }
  }
`
