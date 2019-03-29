import React, { Fragment } from 'react'
import Container from './components/Container'
import Header from './components/Header'
import { hot } from 'react-hot-loader'

const App = () => (
  <Fragment>
    <Header />
    <Container />
  </Fragment>
)

export default hot(module)(App)