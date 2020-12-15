import React, { useEffect, useRef } from "react";
import Webcam from "react-webcam";
import * as ml5 from "ml5";
import {IoCameraReverseOutline} from 'react-icons/io5';
import './Webcam.css';

const WebcamView = (props) => {
    const {setScannedCardName, scannedCardName} = props;
    const webcamRef = useRef(null);
    const [facingMode, setFacingMode] = React.useState("user");
    let cameraInterval = null;
    
    

    const runCamera = async () => {
        let classifier =  ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6_biR2NFv/model.json', ()=>{console.log("Model Loaded")});
        let mediaElement = document.querySelector("#webcam");
        if(true){
          console.log("camera running")
          cameraInterval = setInterval( () => {
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
        runCamera();
        return () => {
            console.log("cleaning up...")
            clearInterval(cameraInterval);
        }
       },[]) 

    const switchCameraClick = React.useCallback(() => {
        setFacingMode( prevState => prevState === "user" ? "environment" : "user")
        console.log("switched camera");
    },[])

    return (
    <>    
        <Webcam
            id="webcam"
            ref={webcamRef}
            muted={true}
            audio={false} 
            videoConstraints={{facingMode: {facingMode}}}
        />
        <IoCameraReverseOutline 
            id="switch-cam-btn"
            onClick = {switchCameraClick}
        />
        <div id="card-result">{scannedCardName}</div>
        
      </>
      )
}

export default WebcamView;