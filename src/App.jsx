import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { QuotesProvider } from './Context/QuotesContext.jsx'
import { CreatePost, Home } from './containers'
import { Layout } from './components'
import { theme, GlobalStyle } from './shared'
import './App.css'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <QuotesProvider>
          <Layout>
            <Switch>
              <Route exact component={Home} path='/' />
              <Route exact component={CreatePost} path='/create' />
            </Switch>
          </Layout>
        </QuotesProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
