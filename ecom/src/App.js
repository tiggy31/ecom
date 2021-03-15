import React from 'react'
import LandingPage from './pages/landingpage/landingpage.components'
import {Route, Link} from 'react-router-dom'
import ShopPage from './pages/shoppage/shoppage.component'
import './App.css'
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
      <Route exact={true} path='/' component={LandingPage}/>
      {/* <LandingPage /> */}
      <Route exact={false} path='/ShopPage' component={ShopPage}/>
    </div>
  )
}

export default App