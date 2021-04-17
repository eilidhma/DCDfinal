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
  
  const[width, setWidth] = useState(questions.width.ten)

  const[title, setTitle] = useState(questions.title.one)

  const [question, setQuestionState] = useState(questions.first.Q);

  const [button1, setButton1State] = useState(questions.first.Temperate);
  const [button2, setButton2State] = useState(questions.first.Tropical);
  const [button3, setButton3State] = useState(questions.first.Arid);

  const HandleChange = () =>{
    setButtonState(0)
    if(question === questions.first.Q){
      setPercent(questions.percent.twentyfive)
      setWidth(questions.width.twentyfive)
      setTitle(questions.title.two)
      setQuestionState(questions.second.Q)
      setButton1State(questions.second.Low);
      setButton2State(questions.second.Med);
      setButton3State(questions.second.High);
    }
    if(question === questions.second.Q){
      setPercent(questions.percent.fifty)
      setWidth(questions.width.fifty)
      setTitle(questions.title.three)
      setQuestionState(questions.third.Q)
      setButton1State(questions.third.Pots);
      setButton2State(questions.third.Ground);
      setButton3State("remove");
    }
    if(question === questions.third.Q){
      setPercent(questions.percent.seventyfive)
      setWidth(questions.width.seventyfive)
      setTitle(questions.title.four)
      setQuestionState(questions.fourth.Q)
      setButton1State(questions.fourth.Veg);
      setButton2State(questions.fourth.Flower);
      setButton3State("remove");
    }
    if(question === questions.fourth.Q){
      setPercent(questions.percent.hundred)
      setWidth(questions.width.hundred)
      setTitle(questions.title.loading)
    }
    
  }

  const router = useRouter()

  return (
    <div className="quiz">
      <StatusBar percent={percent} width={width}/>
      <MedTitles text={title}/>
    </div>
  )
}