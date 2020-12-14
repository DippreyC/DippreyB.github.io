import React, { useEffect, useRef } from "react";
import WebcamView from './components/WebcamView';
import './App.css';



const App = () => {
  const [scannedCardName,setScannedCardName] = React.useState("Scanning...");
  const [webcamVisible, setWebcamVisibility] = React.useState(false);

  return (
    <>
    {webcamVisible ? <WebcamView setScannedCardName={setScannedCardName}/> : <div>Webcam hidden</div>}
    <button onClick={() => setWebcamVisibility(!webcamVisible)}>Show camera</button>
    </>
  );
}



export default App;
