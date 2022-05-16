import { Link } from 'react-router-dom'

import { Container } from '../../shared'

import { HeaderContainer } from './Header.styles.js'

export function Header() {
  return (
    <HeaderContainer>
      <Container>
        <h1>
          <Link to='/'>Welcome to Blog Community 📖</Link>
        </h1>
      </Container>
    </HeaderContainer>
  )
}
