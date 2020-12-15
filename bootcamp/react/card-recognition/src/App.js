import React from "react";
import WebcamView from './components/Webcam/WebcamView';
import Navbar from './components/NavBar/Navbar';
import {HashRouter as Router,Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';



const App = () => {
  const [scannedCardName,setScannedCardName] = React.useState("Scanning...");

  return (
    <>
    <Router>
      <Navbar />
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/camera" render={(props) => (<WebcamView {...props} scannedCardName={scannedCardName} setScannedCardName={setScannedCardName}/>)} />
      </Switch>
    </Router>
    </>
  );
}



export default App;
