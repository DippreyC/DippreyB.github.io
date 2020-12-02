import * as ml5 from "ml5";
import React, { useEffect, useRef } from "react";
import Webcam from "react-webcam";
import './App.css';
import queen from "./img/aust1.jpg";


const App = () => {

  
  const [scannedCardName,setScannedCardName] = React.useState("Scanning...");
  const webcamRef = useRef(null);
 
 const runApp = async () => {
  let classifier =  ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6_biR2NFv/model.json', ()=>{console.log("Model Loaded")});
  if(!webcamRef.current.props.muted){
    setInterval( () => {
      detect(classifier);
    }, 100
    )
  }
  else{
    classifier.classify(document.querySelector("#img"), (err,results) =>{
      console.log(results);
      let cardLabel = results[0].label;
      let percentConfidence = results[0].confidence.toFixed(3)*100;
      if(percentConfidence > 30)
        setScannedCardName(cardLabel+" "+percentConfidence+"%");
      else
        setScannedCardName("Can't read card...");
    });
  }
}

 const detect = async (classifier) => {
    classifier.classify(document.querySelector("#webcam"), (err, results) =>{
      console.log(results);
      let cardLabel = results[0].label;
      let percentConfidence = results[0].confidence.toFixed(3)*100;
      if(percentConfidence > 30)
        setScannedCardName(cardLabel+" "+percentConfidence+"%");
      else
        setScannedCardName("Can't read card...");
  })
 }

  

  useEffect( () => {
   runApp();
  })   

  return (
    <div id="webcam-container">
    <img src={queen} style={{width: "300px"}} alt="Queen Marchesa Pic" id="img"/>
    <div>{scannedCardName}</div>
    <Webcam
          id="webcam"
          ref={webcamRef}
          muted={true} 
          style={{
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
    </div>
  );
}



export default App;
