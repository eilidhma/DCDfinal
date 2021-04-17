import { useRouter } from 'next/router';
import React, {useState} from 'react';
import {questions} from '../data/text';
import MainButton from '../comps/MainButton';
import LargeTitles from '../comps/LargeTitles';
import MedTitles from '../comps/MediumTitles';
import MainImg from '../comps/MainImg';

export default function Results() {


  return (
    <div className="results">
      <MainImg src="logo-flat.png"/>
      <LargeTitles text="hello"/>
      <MainButton text="See how you will make a difference!"/>
    </div>
  )
}