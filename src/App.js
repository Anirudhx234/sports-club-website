import './App.css';
import Navbar from './pages/Navbar.js';
import Home from './pages/Home.js';
import Execs from './pages/Execs.js';
import SportsCommittees from './pages/SportsCommittees.js';
import Events from './pages/Events.js';
import Info from './pages/GeneralInfo.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/execs" component={Execs} />
          <Route path="/sports-committees" component={SportsCommittees} />
          <Route path="/events-schedule" component={Events} />
          <Route path="/generalinfo" component={Info} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
