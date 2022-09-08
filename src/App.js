// packages
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
// style
import './App.scss';
import './responsiveness.css'
// pages
import BadRequest from './pages/BadRequest'
// pages -- landing
import Home from './pages/Home'
// pages -- authentication
import Authentication from './pages/Authentication'
import ForgotPassword from './pages/Authentication/ForgotPassword'
import NewPassword from './pages/Authentication/NewPassword'
import AccountRequest from './pages/Authentication/AccountRequest'

const Routing = () => {
  return(
    <Routes>
      {/* landing */}
      <Route path='/' element={<Home />} />
      {/* authentication */}
      <Route path='/login' element={<Authentication />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/new-password' element={<NewPassword />} />
      <Route path='/account-request' element={<AccountRequest />} />
      {/* bad page */}
      {/* <BadRequest /> */}
    </Routes>
  )
}

const App = () => {
  return <div className="App">
    <Router>
      <Routing />
    </Router>
  </div>
}

export default App;
