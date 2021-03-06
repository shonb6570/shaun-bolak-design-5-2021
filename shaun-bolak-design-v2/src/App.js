import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/App.scss';
import { Layout } from './components/Layout';
import { Home } from './Home';
import { About } from './About';
import { Work } from './Work';
import { HSF } from './HSF';
import { FourHire } from './FourHire';
import { WriterAccess } from './WriterAccess';
import { CaribLib } from './CaribLib';
import { Design } from './Design';
import { Contact } from './Contact';
import { FourOFour } from './FourOFour';
import { Footer } from './components/Footer';




class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="site-bg">    
              <Router>
                <Switch>
                
                  <Route exact path='/' component={ Home } />
                  <Route path='/about' component={ About } />
                  <Route path='/work' component={ Work } />
                  <Route path='/hsf' component={ HSF } />
                  <Route path='/fourhire' component={ FourHire } />
                  <Route path='/writeraccess' component={ WriterAccess } />
                  <Route path='/caribbean-library' component={ CaribLib } />
                  <Route path='/design' component={ Design } />
                  <Route path='/contact' component={ Contact } />
                  <Route component={ FourOFour} />

                </Switch>
              </Router>
            
          <Footer />
        </div>
      </React.Fragment> 
    )
  }
}

export default App;
