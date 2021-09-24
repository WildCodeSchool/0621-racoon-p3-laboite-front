import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Admin from './screens/Admin/Admin.jsx'
import Contact from './screens/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import Home from './screens/Home/Home.jsx'
import Login from './screens/Login/Login.jsx'
import Partners from './screens/Partners/Partners'
import Pole from './screens/Pole/Pole.jsx'

import './App.css'
import './Normalize.css'

function App() {
  return (
    <Router>
      <div className='mainContainer'>
        <Header />
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
            <Login />
          </Route>
          <Route>
            <Admin />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
