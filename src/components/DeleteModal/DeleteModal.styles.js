import styled from 'styled-components'

export const ModalContainer = styled.div`
  display: ${({ isShowing }) => (isShowing ? 'grid' : 'none')};
  place-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(20px);
`

export const Modal = styled.div`
  width: 80%;
  padding: 20px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  text-align: center;
  background: ${({ theme }) => theme.colors.black};

  h3 {
    margin-top: 0;
    font-size: ${({ theme }) => theme.sizes.l};
    color: ${({ theme }) => theme.colors.white};
  }

  span {
    display: inline-block;
    margin-bottom: 30px;
    font-size: ${({ theme }) => theme.sizes.n};
  }

  div {
    display: grid;
    gap: 10px;

    @media screen and (min-width: 1024px) {
      grid-template-columns: repeat(2, 250px);
      justify-content: center;
    }
  }

  @media screen and (min-width: 1024px) {
    width: max-content;
    font-size: 20px;
  }
`
