import { useRouter } from 'next/router';
import StatusBar from '../comps/StatusBar'
import MedTitles from '../comps/MediumTitles'
import React, {useState} from 'react';
import {questions} from '../data/text';
import Loading from '../comps/LoadingPage';
import { useRouter } from 'next/router';



export default function Quiz() {
  const [buttonstate, setButtonState] = useState(0);

  const[percent, setPercent] = useState(questions.percent.zero)
  
  const[width, setWidth] = useState(questions.width.ten)

  const[title, setTitle] = useState(questions.title.one)

  const [question, setQuestionState] = useState(questions.first.Q);

  const [button1, setButton1State] = useState(questions.first.Temperate);
  const [button2, setButton2State] = useState(questions.first.Tropical);
  const [button3, setButton3State] = useState(questions.first.Arid);


  const router = useRouter()

  return (
    <div className="quiz">
      <StatusBar percent={percent} width={width}/>
      <Loading />
      <MedTitles text={title}/>
    </div>
  )
}