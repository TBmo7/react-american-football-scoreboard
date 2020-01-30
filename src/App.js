//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import {setDown} from "./BottomRow";


function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [lionScore, setLionScore] = useState(0);
  const [tigerScore, setTigerScore] = useState(0);
  const [timer, setTimer] = useState(900);
  const reset = () => {setLionScore(0);setTigerScore(0);setTimer(900)}

  //LOGIC
  let probability = 0;
  let down = 1;
  let changeYard = 0;
  let changeTime = 0;
  let currentYard = 50;
  //let currentTime;



  const pass = () => {
    if(down === 1){
      probability = 48;
      if(probability > Math.floor((Math.random()*100)+1)){
        //success
         changeYard = Math.floor((Math.random()*100)+1);
         changeTime = Math.floor((Math.random()*60)+1);
      }
      else{
         changeYard = 0;
         changeTime = Math.floor((Math.random()*30)+1);
      }
    }
    if(down === 2){
      probability = 28;
      if(probability > Math.floor((Math.random()*100)+1)){
         changeYard = Math.floor((Math.random()*100)+1);
         changeTime = Math.floor((Math.random()*60)+1);
      }
      else{
         changeYard = 0;
         changeTime = Math.floor((Math.random()*30)+1);
      }
    }
    if(down === 3 ){
      probability = 25;
      if(probability > Math.floor((Math.random()*100)+1)){
         changeYard = Math.floor((Math.random()*100)+1);
         changeTime = Math.floor((Math.random()*60)+1);
      }
      else{
         changeYard = 0;
         changeTime = Math.floor((Math.random()*30)+1);
      }
    }
    if(down === 4){
      probability = 15;
      if(probability > Math.floor((Math.random()*100)+1)){
         changeYard = Math.floor((Math.random()*100)+1);
         changeTime = Math.floor((Math.random()*60)+1);
      }
      else{
         changeYard = 0;
         changeTime = Math.floor((Math.random()*30)+1);
      }
    }
      currentYard += changeYard;
      changeYard += changeYard;

      setTimer(timer-changeTime);
      changeTime = 0;
      down ++;
      setDown(down);

    console.log(probability);
    console.log(changeYard);
    console.log(down);
    console.log(changeTime);
          if(changeYard > 10){
            down=1;
            currentYard += changeYard;
          }
          if(currentYard >= 100){
            setTigerScore(tigerScore+7);
            currentYard = 50;
            down = 1;
          }
          if(down>=4){
            down =0;

          }


  }



  const run = () => {
    if(down === 1){
      probability = 48;
      if(probability > Math.floor((Math.random()*100)+1)){
        //success
         changeYard = Math.floor((Math.random()*100)+1);
         changeTime = Math.floor((Math.random()*60)+1);
      }
      else{
         changeYard = 0;
         changeTime = Math.floor((Math.random()*30)+1);
      }
    }
    if(down === 2){
      probability = 28;
      if(probability > Math.floor((Math.random()*100)+1)){
         changeYard = Math.floor((Math.random()*100)+1);
         changeTime = Math.floor((Math.random()*60)+1);
      }
      else{
         changeYard = 0;
         changeTime = Math.floor((Math.random()*30)+1);
      }
    }
    if(down === 3 ){
      probability = 25;
      if(probability > Math.floor((Math.random()*100)+1)){
         changeYard = Math.floor((Math.random()*100)+1);
         changeTime = Math.floor((Math.random()*60)+1);
      }
      else{
         changeYard = 0;
         changeTime = Math.floor((Math.random()*30)+1);
      }
    }
    if(down === 4){
      probability = 15;
      if(probability > Math.floor((Math.random()*100)+1)){
         changeYard = Math.floor((Math.random()*100)+1);
         changeTime = Math.floor((Math.random()*60)+1);
      }
      else{
         changeYard = 0;
         changeTime = Math.floor((Math.random()*30)+1);
      }
    }
      currentYard += changeYard;
      changeYard += changeYard;

      setTimer(timer-changeTime);
      changeTime = 0;
      down ++;

    console.log(probability);
    console.log(changeYard);
    console.log(down);
    console.log(changeTime);
          if(changeYard > 10){
            down=1;
            currentYard += changeYard;
          }
          if(currentYard >= 100){
            setLionScore(lionScore+7);
            currentYard = 50;
            down = 1;
          }
          if(down>=4){
            down =0;
          }


  }


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionScore}</div>
          </div>
          <div className="timer">{timer}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigerScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick ={()=> setLionScore(lionScore+7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick ={()=> setLionScore(lionScore+3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick ={()=> setTigerScore(tigerScore+7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick ={()=> setTigerScore(tigerScore+3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
        <div className = "gameButtons">
          <button onClick ={()=> reset()} className = "gameButtons__reset">Reset</button>
          <button onClick = {()=> pass()} className = "gameButtons__pass">Tigers</button>
          <button onClick = {()=> run()} className = "gameButtons__run">Lions</button>

        </div>
      </section>
    </div>
  );
}

export default App;
