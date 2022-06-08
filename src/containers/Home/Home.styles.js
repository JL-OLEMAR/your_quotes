import styled from 'styled-components'

export const PostsContainer = styled.section`
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

export const ButtonsContainerPages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  gap: 20px;
`
