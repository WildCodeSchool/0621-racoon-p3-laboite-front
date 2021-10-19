import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useContext } from 'react'
import { useMediaQuery } from 'react-responsive'

import { Context } from './context/Context'
import { PrivateRoute } from './use/useSecureRoute'

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
  const { access_token } = useContext(Context)

  return (
    <Router>
      <ScrollToTop />
      <div className='mainContainer'>
        {!access_token && <Header />}
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
          <PrivateRoute exact path='/admin'>
            <AdminHome />
          </PrivateRoute>
          <PrivateRoute exact path='/admin/activities'>
            <AdminActivity />
          </PrivateRoute>
          <PrivateRoute exact path='/admin/poles'>
            <AdminPole />
          </PrivateRoute>
          {/* <PrivateRoute exact path='/admin/poles'>
                <PoleAdmin />
              </PrivateRoute> */}
          <PrivateRoute exact path='/admin/members'>
            <AdminTeam />
          </PrivateRoute>
          <PrivateRoute exact path='/admin/partners'>
            <AdminPartner />
          </PrivateRoute>
        </Switch>
        {!access_token && <Footer />}
        {!isDesktop && <MobileNavBar />}
      </div>
    </Router>
  )
}

export default App
