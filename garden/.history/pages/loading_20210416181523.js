import { useRouter } from 'next/router';
import StatusBar from '../comps/StatusBar'
import MedTitles from '../comps/MediumTitles'
import React, {useState} from 'react';
import {questions} from '../data/text';
import Loading from '../comps/LoadingPage';
import { useRouter } from 'next/router';



export default function Quiz() {
  const router = useRouter()

  const[percent, setPercent] = useState(questions.percent.hundred)
  
  const[width, setWidth] = useState(questions.width.hundred)

  const[title, setTitle] = useState(questions.title.)


  const router = useRouter()

  return (
    <div className="quiz">
      <StatusBar percent={percent} width={width}/>
      <Loading />
      <MedTitles text={title}/>
    </div>
  )
}