import { useRouter } from 'next/router';
import React, {useState} from 'react';
import MainButton from '../comps/MainButton';
import LargeTitles from '../comps/LargeTitles';
import MainImg from '../comps/MainImg';
import Options from '../comps/Results';

export default function Results() {


  return (
    <div className="results">
      <MainImg src="logo-flat.png"/>
      <LargeTitles text="Our recommendations"/>
      <Options/>
      <Options/>
      <Options/>
      <Options/>
      <MainButton text="See how you will make a difference!"/>
    </div>
  )
}