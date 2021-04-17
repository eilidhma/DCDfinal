import { useRouter } from 'next/router';
import StatusBar from '../comps/StatusBar'
import MedTitles from '../comps/MediumTitles'
import React, {useState} from 'react';
import {questions} from '../data/text';
import Loading from '../comps/LoadingPage';
import { useRouter } from 'next/router';



export default function Quiz() {
  const router = useRouter()

  const[percent, setPercent] = useState(questions.percent.zero)
  
  const[width, setWidth] = useState(questions.width.ten)

  const[title, setTitle] = useState(questions.title.one)


  const router = useRouter()

  return (
    <div className="quiz">
      <StatusBar percent={percent} width={width}/>
      <Loading />
      <MedTitles text={title}/>
    </div>
  )
}