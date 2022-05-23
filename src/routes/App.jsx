import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
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
              <Routes>
                <Route element={<Home />} path='/' />
                <Route element={<CreatePost />} path='/create' />
                <Route element={<SinglePost />} path='/posts/:postId' />
                <Route element={<EditPost />} path='/edit/:postId' />
                <Route element={<Navigate to='/' />} path='*' />
              </Routes>
            </Layout>
          </PostsProvider>
        </BrowserRouter>
      </ThemeProvider>
      <ToastContainer theme='colored' />
    </>
  )
}
