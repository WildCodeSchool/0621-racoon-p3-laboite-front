import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useContext } from 'react'
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
  const isDesktop = useMediaQuery({ query: '(min-width: 788px)' })
  const { user, isAuth } = useContext(Context)
  console.log('userContext: ' + user, isAuth)

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
            <Login />
          </Route>
          {user ? (
            <>
              <Route exact path='/admin'>
                <AdminHome />
              </Route>
              <Route exact path='/admin/activities'>
                <AdminActivity />
              </Route>
              <Route exact path='/admin/poles'>
                <AdminPole />
              </Route>
              {/* <Route exact path='/admin/poles'>
                <PoleAdmin />
              </Route> */}
              <Route exact path='/admin/members'>
                <AdminTeam />
              </Route>
              <Route exact path='/admin/partners'>
                <AdminPartner />
              </Route>
            </>
          ) : (
            <Home />
          )}
        </Switch>
        {!user && <Footer />}
        {!isDesktop && <MobileNavBar />}
      </div>
    </Router>
  )
}

export default App
