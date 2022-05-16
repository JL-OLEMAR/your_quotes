import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { QuotesProvider } from '../Context'
import { CreatePost, Home } from '../containers'
import { Layout } from '../components'
import { GlobalStyle, theme } from '../shared'
import { ScrollToTop } from '../utils/ScrollToTop.js'

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <ScrollToTop />
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
