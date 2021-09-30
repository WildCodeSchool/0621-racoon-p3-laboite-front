import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Concept from './components/Concept/Concept'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Admin from './screens/Admin/Admin'
import Contact from './screens/Contact/Contact'
import Home from './screens/Home/Home'
import Login from './screens/Login/Login'
import Partners from './screens/Partners/Partners'
import Pole from './screens/Pole/Pole'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'

import './App.css'
import './Normalize.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='mainContainer'>
        <Header />
        <Navbar />
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
          <Route path='/admin'>
            <Admin />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
