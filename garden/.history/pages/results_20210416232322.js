import { useRouter } from 'next/router';
import React, {useState} from 'react';
import {questions} from '../data/text';
import MainButton from '../comps/MainButton';
import QuestionButton from '../comps/QuestionButtons';
import LargeTitles from '../comps/LargeTitles';

export default function Results() {

  const router = useRouter()

  return (
    <div className="results">
      <LargeTitles text="hello"/>
      <div></div>
      <MainButton text="See how you will make a difference!"/>
    </div>
  )
}