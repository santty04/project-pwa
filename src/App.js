import React from 'react'
import { BrowserRouter, Link } from "react-router-dom"
import './App.css'
import { Routes } from './Routes'

import ReactGA from 'react-ga'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <Link to="/">Recetas</Link>
          </header>

          <main>
            <Routes />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

const WrappedComponent = props => {
  ReactGA.initialize( 'UA-000000-01' )
  ReactGA.pageview( window.location.pathname + window.location.search )

  return <App {...props} />
}

export default WrappedComponent
