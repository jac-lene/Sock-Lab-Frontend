import React from 'react'
import Checkers from '../components/Checkers'
import Header from '../components/Header'

function Home({ header, headerChange }) {
  return (
    <div>
    <Header header={header} headerChange={headerChange} />
      <div className='dash-divider'></div>
    <Checkers/>
    
    </div>
  )
}

export default Home