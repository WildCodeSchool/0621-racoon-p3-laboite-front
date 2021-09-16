import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Header from './components/Header.jsx'
import Home from './screens/Home/Home.jsx'
import Footer from './components/Footer/Footer.jsx'

import './App.css'
import './Normalize.css'

function App() {
  return (
    <Router>
      <div className='main-container'>
        <Header />
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
