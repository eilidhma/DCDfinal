import MainImg from '../comps/MainImg'
import { useRouter } from 'next/router';
import StatusBar from '../comps/StatusBar'
import MedTitles from '../comps/MediumTitles'
import Question from '../comps/Questions'
import React, {useState} from 'react';
import {questions} from '../data/text';
import MainButton from '../comps/MainButton';
import QuestionButton from '../comps/QuestionButtons';

export default function Results() {

  const router = useRouter()

  return (
    <div className="quiz">
      <StatusBar percent={percent} width={width}/>
      <MedTitles text={title}/>
      <MainImg src={image} width="80"/>
      <Question text={question}/>
      <div className="questionCont">
        <QuestionButton 
          className="questbutton"
          text={button1} 
          onClick={()=>{setButtonState(1),setBorderState(1)}}
          background = {buttonstate === 1 ? "#367A17" : "#FFFFFF33"}
          borderColor = {borderstate === 1 ? "#367A17" : "#FFFFFF"}/>
        <QuestionButton 
          className="questbutton"
          text={button2} 
          onClick={()=>{setButtonState(2),setBorderState(2)}}
          background = {buttonstate === 2 ? "#367A17" : "#FFFFFF33"}
          borderColor = {borderstate === 2 ? "#367A17" : "#FFFFFF"}/>
        <QuestionButton 
          className="questbutton"
          text={button3} 
          onClick={()=>{setButtonState(3),setBorderState(3)}}
          background = {buttonstate === 3 ? "#367A17" : "#FFFFFF33"}
          borderColor = {borderstate === 3 ? "#367A17" : "#FFFFFF"}/>
      </div>
      <MainButton text="Next Question" onClick={HandleChange}/>
    </div>
  )
}