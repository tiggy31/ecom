import React from 'react'
import LandingPage from './pages/landingpage/landingpage.components'
import {Route, Link} from 'react-router-dom'
function App(){

  const smiles = (props) => {
    console.log(props)
    return <div>
      <h1>I'm smilling </h1>
      <button onClick= {() => props.history.push('./s')}>Topics</button>
    </div>
  }
  return (
    <div>
      <Route exact={true} path='/' component={smiles}/>
      {/* <LandingPage /> */}
      <Route exact={false} path='/LandingPage' component={LandingPage}/>
    </div>
  )
}

export default App