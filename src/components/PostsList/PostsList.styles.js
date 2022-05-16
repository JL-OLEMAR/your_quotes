import styled from 'styled-components'

export const Posts = styled.section`
  font-size: 16px;

  div {
    display: grid;
    gap: 20px;

    @media screen and (min-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`
