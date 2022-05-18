import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Post = styled.article`
  position: relative;
  display: grid;
  grid-template-rows: repeat(2, auto) 1fr;
  padding: 20px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;

  h3 {
    margin-top: 0;
    text-align: center;
    font-size: ${({ theme }) => theme.sizes.m};
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};
  }

  p {
    font-size: ${({ theme }) => theme.sizes.n};
    color: ${({ theme }) => theme.colors.grey};
  }

  span {
    align-self: end;
  }
`

export const PostTitle = styled(Link)`
  color: ${({ theme }) => theme.colors.white};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
  }
`
