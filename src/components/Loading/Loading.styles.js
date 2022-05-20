import styled, { keyframes } from 'styled-components'

const load = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }

  100% {
    top: 0;
    left: 0;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`

export const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: grid;
  place-items: center;
  z-index: 30;
  background: ${({ theme }) => theme.colors.black};
`

export const LoadingContent = styled.div`
  position: relative;
  width: 80px;
  height: 80px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    border: 4px solid ${({ theme }) => theme.colors.white};
    animation: ${load} 1000ms cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  &::after {
    animation-delay: -500ms;
  }
`
