import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'

import './App.css'
import './Normalize.css'

function App() {
  return (
    <Router>
      <div className='main-container'>
        <Header />
        <Home />
        <Footer />
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
