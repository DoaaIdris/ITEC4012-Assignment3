import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { AirportHomePage } from './components/pages/AirportHomePage';
import { CountryDetailsPage } from './components/pages/CountryDetailsPage';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
    <Switch>
      <Route exact path="/">
        <AirportHomePage />
      </Route>
      <Route path="/country/:id">
        <CountryDetailsPage />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
