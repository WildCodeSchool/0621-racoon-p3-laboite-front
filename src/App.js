import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState, useContext } from 'react'
import { useMediaQuery } from 'react-responsive'

import { Context } from './context/Context'

import Concept from './components/Concept/Concept'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import AdminHome from './screens/Admin/AdminHome'
import AdminActivity from './screens/Admin/AdminActivity/AdminActivity'
import AdminPole from './screens/Admin/AdminPole'
import AdminPartner from './screens/Admin/AdminPartner/AdminPartner'
import AdminTeam from './screens/Admin/AdminTeam/AdminTeam'
import Contact from './screens/Contact/Contact'
import Home from './screens/Home/Home'
import Login from './screens/Login/Login'
import Partners from './screens/Partners/Partners'
import Pole from './screens/Pole/Pole'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'
import PoleAdmin from './screens/Admin/PoleAdmin'
import MobileNavBar from './components/Navbar/MobileNavBar'

import './App.css'
import './Normalize.css'

function App() {
  const [isLogged, setIsLogged] = useState(false)
  const isDesktop = useMediaQuery({ query: '(min-width: 788px)' })
  const { user } = useContext(Context)
  console.log('userContext: ' + user)
  return (
    <Router>
      <ScrollToTop />
      <div className='mainContainer'>
        {!user && <Header />}
        {isDesktop && <Navbar />}
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/poles/:id'>
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
          <Route exact path='/admin/activities'>
            {user ? <AdminActivity /> : <Home />}
          </Route>
          <Route exact path='/admin/poles'>
            {user ? <AdminPole /> : <Home />}
          </Route>
          {/* <Route exact path='/admin/poles'>
            <PoleAdmin />
          </Route> */}
          <Route exact path='/admin/members'>
            {user ? <AdminTeam /> : <Home />}
          </Route>
          <Route exact path='/admin/partners'>
            {user ? <AdminPartner /> : <Home />}
          </Route>
          <Route path='/admin'>{user ? <AdminHome /> : <Home />}</Route>
        </Switch>
        {!user && <Footer />}
        {!isDesktop && <MobileNavBar />}
      </div>
    </Router>
  )
}

export default App
