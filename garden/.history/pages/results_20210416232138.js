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
    <div className="results">
      
      <div></div>
      <MainButton text="See how you will make a difference!" onClick={HandleChange}/>
    </div>
  )
}