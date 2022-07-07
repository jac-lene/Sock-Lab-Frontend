import React from 'react'
import './DesignPage.css'
import Header from '../components/Header'
import Checkers from '../components/Checkers'

function DesignPage() {
  return (
        <div className="main">
            <Header />
      <header className="App-header">
        <h1 className='site-title'>sock lab</h1>
        <h2>change style</h2>
        <h2>clear</h2>
        <h2>save</h2>
      </header>
      <div className='dash-divider'></div>
      <body>
      <Checkers/>
        <h1>hello</h1>
        </body>
    </div>
  )
}

export default DesignPage