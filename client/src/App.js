import react from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MyPalletes from './MyPalletes'
import Generate from './Generate'


function App() {

  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Body}/>
          <Route path="/generate" component={Generate}/>
          <Route path="/myPalletes" component={MyPalletes}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
