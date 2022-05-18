import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { QuotesProvider } from '../Context'
import { CreatePost, EditPost, Home, SinglePost } from '../containers'
import { Layout } from '../components'
import { ScrollToTop } from '../utils/ScrollToTop.js'
import { GlobalStyle, theme } from '../shared'

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
              <Route exact component={SinglePost} path='/posts/:postId' />
              <Route exact component={EditPost} path='/edit/:postId' />
            </Switch>
          </Layout>
        </QuotesProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
