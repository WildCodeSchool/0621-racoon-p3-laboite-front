import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <Router>
      <div className='App'>
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
