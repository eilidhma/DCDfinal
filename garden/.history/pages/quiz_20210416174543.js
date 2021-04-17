import MainImg from '../comps/MainImg'
import ButtonUI from '../comps/MainButton'
import { useRouter } from 'next/router';
import StatusBar from '../comps/StatusBar'
import MedTitles from '../comps/MediumTitles'
import Question from '../comps/Questions'
import React, {useState} from 'react';
import {questions} from '../data/text';



export default function Quiz() {
  const [buttonstate, setButtonState] = useState(0);

  const[percent, setPercent] = useState(questions.percent.zero)
  // const[percent, setPercent] = useState(questions.percent.twentyfive)
  // const[percent, setPercent] = useState(questions.percent.fifty)
  // const[percent, setPercent] = useState(questions.percent.seventyfive)
  // const[percent, setPercent] = useState(questions.percent.hundred)
  const[width, setWidth] = useState(questions.width.ten)
  const[width, setWidth] = useState(questions.width.twentyfive)
  const[width, setWidth] = useState(questions.width.fifty)
  const[width, setWidth] = useState(questions.width.seventyfive)
  const[width, setWidth] = useState(questions.width.hundred)

  const [question, setQuestionState] = useState(questions.first.Q);

  const [button1, setButton1State] = useState(questions.first.Temperate);
  const [button2, setButton2State] = useState(questions.first.Tropical);
  const [button3, setButton3State] = useState(questions.first.Arid);

  const HandleChange = () =>{
    setButtonState(0)
    if(question === questions.first.Q){
      setQuestionState(questions.second.Q)
      setButton1State(questions.second.Low);
      setButton2State(questions.second.Med);
      setButton3State(questions.second.High);
    }
    if(question === questions.second.Q){
      setQuestionState(questions.third.Q)
      setButton1State(questions.third.Pots);
      setButton2State(questions.third.Ground);
      setButton3State("remove");
    }
    if(question === questions.third.Q){
      setQuestionState(questions.fourth.Q)
      setButton1State(questions.fourth.Veg);
      setButton2State(questions.fourth.Flower);
      setButton3State("remove");
    }
    
  }

  const router = useRouter()

  return (
    <div className="quiz">
      <StatusBar percent={percent} width={width}/>
      <MedTitles text="Question #1"/>
      <MainImg src="worldmap.png" width="80"/>
      <Question text={question}/>
      <ButtonUI 
        text={button1} 
		    onClick={()=>setButtonState(1)}
        background = {buttonstate === 1 ? "#367A17" : "#FFFFFF33"}/>
      <ButtonUI 
        text={button2} 
        onClick={()=>setButtonState(2)}
        background = {buttonstate === 2 ? "#367A17" : "#FFFFFF33"}/>
      <ButtonUI 
        text={button3} 
        onClick={()=>setButtonState(3)}
        background = {buttonstate === 3 ? "#367A17" : "#FFFFFF33"}/>
      <ButtonUI text="Next Question" onClick={HandleChange}/>
    </div>
  )
}