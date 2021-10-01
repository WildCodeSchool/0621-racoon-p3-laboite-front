import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState } from 'react'

import Concept from './components/Concept/Concept'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import AdminHome from './screens/Admin/AdminHome'
import AdminActivity from './screens/Admin/AdminActivity'
import AdminPole from './screens/Admin/AdminPole'
import AdminTeam from './screens/Admin/AdminTeam'
import Contact from './screens/Contact/Contact'
import Home from './screens/Home/Home'
import Login from './screens/Login/Login'
import Partners from './screens/Partners/Partners'
import Pole from './screens/Pole/Pole'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'
import ActivityAdmin from './screens/Admin/ActivityAdmin'
import TeamAdmin from './screens/Admin/TeamAdmin'
// import PoleForm from './components/PoleForm/PoleForm'

import './App.css'
import './Normalize.css'

function App() {
  const [isLogged, setIsLogged] = useState(false)

  return (
    <Router>
      <ScrollToTop />
      <div className='mainContainer'>
        {!isLogged && <Header />}
        {!isLogged && <Navbar />}
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/pole/:id'>
            <Pole />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/concept'>
            <Concept />
          </Route>
          <Route path='/partenaires'>
            <Partners />
          </Route>
          <Route exact path='/login'>
            <Login isLogged={isLogged} setIsLogged={setIsLogged} />
          </Route>
          <Route exact path='/admin/activity'>
            <div>AdminActivity</div>
            <AdminActivity />
          </Route>
          <Route exact path='/admin/pole'>
            <div>AdminPole</div>
            <AdminPole />
          </Route>
          <Route exact path='/admin/team'>
            <div>AdminTeam</div>
            <AdminTeam />
          </Route>
          <Route path='/admin'>
            {localStorage.getItem('user_token') ? <AdminHome /> : <Home />}
            {/* <div>AdminHome</div>
            <AdminHome /> */}
          </Route>
        </Switch>
        {!isLogged && <Footer />}
      </div>
    </Router>
  )
}

export default App
