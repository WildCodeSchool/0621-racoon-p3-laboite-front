import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Admin from './screens/Admin/Admin'
import Concept from './components/Concept/Concept'
import Contact from './screens/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './screens/Home/Home'
import Login from './screens/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Partners from './screens/Partners/Partners'
import Pole from './screens/Pole/Pole'

import './App.css'
import './Normalize.css'

function App() {
  return (
    <Router>
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
