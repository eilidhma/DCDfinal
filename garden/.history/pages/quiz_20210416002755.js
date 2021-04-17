import HeroImg from '../comps/HeroImg'
import LargeTitles from '../comps/LargeTitles'
import MainImg from '../comps/MainImg'
import ButtonUI from '../comps/MainButton'
import { useRouter } from 'next/router';
import StatusBar from '../comps/StatusBar'
import MedTitles from '../comps/MediumTitles'
import Question from '../comps/Questions'
import React, {useState} from 'react';


export default function Quiz() {
  const [button1state, setButton1State] = useState(false);
  const [button2state, setButton2State] = useState(false);
  const [button3state, setButton3State] = useState(false);

  const router = useRouter()

  const Button1 = () =>{
    setButton1State(!button1state)
  }

  const Button2 = () =>{
    setButton2State(!button2state)
  }

  const Button3 = () =>{
    setButton3State(!button3state)
  }

  if(button1state === true){
    button2state === false;
    button3state === false;
  }
  if(button1state === true){
    button2state === false;
    button3state === false;
  }
  if(button1state === true){
    button2state === false;
    button3state === false;
  }

  return (
    <div className="quiz">
      <StatusBar percent="0%" width="5%"/>
      <MedTitles text="Question #1"/>
      <MainImg src="worldmap.png" width="80"/>
      <Question text="What climate are you living in right now?"/>
      <ButtonUI 
        text="Temperate" 
        onClick={Button1} 
        background = {button1state ? "black" : "#FFFFFF33"}/>
      <ButtonUI 
        text="Tropical" 
        onClick={Button2}
        background = {button2state ? "black" : "#FFFFFF33"}/>
      <ButtonUI 
        text="Arid" 
        onClick={Button3}
        background = {button3state ? "black" : "#FFFFFF33"}/>
      <ButtonUI text="Next Question" routeTo="/quiz" onClick={() => router.push('/quiz')}/>
    </div>
  )
}