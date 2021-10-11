import { Router } from '@reach/router'
import './App.css';
import PlayerInfo from './pages/PlayerInfo';
import Start from './pages/Start';
require("dotenv").config()

function App() {


  return (
  <Router className="App">
      <Start path="/" />
      <PlayerInfo path="/player/:id" />
    </Router>
  );
}

export default App;
