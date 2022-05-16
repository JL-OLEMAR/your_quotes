import styled from 'styled-components'

export const ButtonsContainer = styled.div`
  display: grid;
  gap: 10px;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 250px);
  }
`

export const Button = styled.button`
  width: 100%;
  height: 50px;
  font-weight: 700;
  border: 0;
  outline: 0;
  border-radius: 5px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.primary};
  font-size: ${({ theme }) => theme.sizes.n};
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.primary};

  &:disabled {
    background: #333;
  }

  @media screen and (min-width: 1024px) {
    width: 250px;
  }
`

export const MainButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DeleteButton = styled(MainButton)`
  background: ${({ theme }) => theme.colors.red};
`

export const CancelButton = styled(MainButton)`
  background: ${({ theme }) => theme.colors.grey};
`
