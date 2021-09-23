import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Contact from './screens/Contact/Contact.jsx'
import Pole from './screens/Pole/Pole.jsx'
import Header from './components/Header/Header.jsx'
import Home from './screens/Home/Home.jsx'
import Footer from './components/Footer/Footer.jsx'
import Concept from './components/Concept/Concept.jsx'

import './App.css'
import './Normalize.css'

function App() {
  return (
    <Router>
      <div className='main-container'>
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
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
