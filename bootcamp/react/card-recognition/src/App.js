import * as ml5 from "ml5";
import React, { useEffect, useRef } from "react";
import Webcam from "react-webcam";
import './App.css';
import queen from "./img/queen5.jpg";


const App = () => {

  
  const [scannedCardName,setScannedCardName] = React.useState("Scanning...");
  const [detectedText, setDetectedText] = React.useState("Detecting Text");
  const webcamRef = useRef(null);
 
 const runApp = async () => {
  let classifier =  ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/m68awb2T0/model.json',modelLoaded);
  detect(classifier);
 }

 const detect = async (classifier) => {
    classifier.classify(document.querySelector("#img"), (err, results) =>{
      console.log(results);
      //if(!err) setScannedCardName(getHighestConfidence(results).label);
  })
 }

  

  const modelLoaded = () => {
    console.log("model Loaded");
  
  }

  
  
  
  useEffect( () => {
   

  })   

  return (
    <>
    <img src={queen} style={{width: "300px"}} alt="Queen Marchesa Pic" id="img"/>
    <div>{scannedCardName}</div>
    <Webcam
          ref={webcamRef}
          muted={true} 
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />
    </>
  );
}

const getHighestConfidence = (results) => {
  let highest = {label: "", confidence: 0};
  results.map( (result) => {
    if(result.confidence > highest.confidence)
      highest = result;
  })

  return highest;
}

export default App;
