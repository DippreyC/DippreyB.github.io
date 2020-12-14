import React, { useEffect, useRef } from "react";
import Webcam from "react-webcam";
import * as ml5 from "ml5";

const WebcamView = (props) => {
    const {setScannedCardName} = props;
    const webcamRef = useRef(null);
    const cameraInterval = null;

    const runApp = async () => {
        let classifier =  ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6_biR2NFv/model.json', ()=>{console.log("Model Loaded")});
        let mediaElement = null;
        if(true){
          console.log("camera running")
          mediaElement = document.querySelector("#webcam");
          setInterval( () => {
            detect(classifier,mediaElement);
          }, 1000
          )
        }
    }

    const detect = async (classifier,mediaElement) => {
        let cardLabel = "";
        let percentConfidence = "";
        classifier.classify(mediaElement, (err, results) =>{
          cardLabel = results[0].label;
          percentConfidence = results[0].confidence.toFixed(3)*100;
          if(percentConfidence > 30)
            setScannedCardName(cardLabel+" "+percentConfidence+"%");
          else
            setScannedCardName("Can't read card...");
        })
     }

     useEffect( () => {
        runApp();
       },[]) 

    const videoConstraints = {facingMode: { exact: "environment" }};
    return (
    <>    
        <Webcam
            id="webcam"
            ref={webcamRef}
            muted={true} 
            style={{
            textAlign: "center",
            zindex: 9,
            width: "100%",
            height: "100vh",
            backgroundColor: "black",  
            }}
            videoConstraints={videoConstraints}
        />
      </>
      )
}

export default WebcamView;