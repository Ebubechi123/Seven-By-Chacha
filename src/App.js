import './App.css';
import React,{useContext} from 'react';
import { Switch, } from "react-router-dom";
import Nav from './Components/Nav/Nav';
import Routes from './Routes/Route';
import { BackgroundProvider } from './StateMangement/BackgroundColor';
function App() {

  const [color] = useContext(BackgroundProvider)
  return (
    <div className="App">
      <Nav />
      <Switch>
      <Routes />
      </Switch>
    </div>
  );
}

export default App;
