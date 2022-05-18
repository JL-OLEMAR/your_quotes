import styled from 'styled-components'

export const FieldTitle = styled.h3`
  font-size: ${({ theme }) => theme.sizes.m};
  color: ${({ theme }) => theme.colors.primary};
`

export const Form = styled.form`
  input,
  textarea,
  select {
    width: 100%;
    height: 50px;
    padding: 0 10px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    outline: 0;
    font-family: ${({ theme }) => theme.font.primary};
    font-size: ${({ theme }) => theme.sizes.s};
    background: transparent;
    color: ${({ theme }) => theme.colors.grey};
    transition: border-color 200ms;

    &:focus {
      border-color: ${({ theme }) => theme.colors.white};
    }
  }

  textarea {
    height: 100px;
    padding: 10px;
  }

  option {
    color: ${({ theme }) => theme.colors.black};
  }

  div {
    display: grid;
    margin-top: 20px;
    gap: 10px;

    @media screen and (min-width: 1024px) {
      grid-template-columns: repeat(2, 250px);
      justify-content: center;
    }
  }

  span {
    display: inline-block;
    margin-top: 10px;
    color: ${({ theme }) => theme.colors.red};
  }

  @media screen and (min-width: 1024px) {
    font-size: 20px;
  }
`
