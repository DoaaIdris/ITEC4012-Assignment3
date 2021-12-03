import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { AirportHomePage } from './components/pages/AirportHomePage';
import { CountryDetailsPage } from './components/pages/CountryDetailsPage';

function App() {
  return (
    <Router>
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
