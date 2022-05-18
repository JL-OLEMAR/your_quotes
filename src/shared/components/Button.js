import styled from 'styled-components'

export const ButtonsContainer = styled.div`
  display: grid;
  gap: 10px;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 250px);
    justify-content: center;
    gap: 20px;
  }
`

export const Button = styled.button`
  width: 100%;
  height: 50px;
  border: 0;
  border-radius: 5px;
  outline: 0;
  font-family: ${({ theme }) => theme.font.primary};
  font-size: ${({ theme }) => theme.sizes.n};
  font-weight: 700;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;

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
