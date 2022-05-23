import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import { PostsProvider } from '../Context'
import { CreatePost, EditPost, Home, SinglePost } from '../containers'
import { Layout } from '../components'
import { GlobalStyle, theme } from '../shared'
import { ScrollToTop } from '../utils'
import 'react-toastify/dist/ReactToastify.css'

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <ScrollToTop />
          <PostsProvider>
            <Layout>
              <Switch>
                <Route exact component={Home} path='/' />
                <Route exact component={CreatePost} path='/create' />
                <Route exact component={SinglePost} path='/posts/:postId' />
                <Route exact component={EditPost} path='/edit/:postId' />
              </Switch>
            </Layout>
          </PostsProvider>
        </BrowserRouter>
      </ThemeProvider>
      <ToastContainer theme='colored' />
    </>
  )
}
