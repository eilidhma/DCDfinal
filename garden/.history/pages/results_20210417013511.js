import { useRouter } from 'next/router';
import React, {useState} from 'react';
import MainButton from '../comps/MainButton';
import LargeTitles from '../comps/LargeTitles';
import MainImg from '../comps/MainImg';
import Options from '../comps/Results';
import {reactLocalStorage} from 'reactjs-localstorage';

export default function Results() {

  var climate = localStorage.getItem('climate');
  var goodIn = reactLocalStorage.getObject('goodIn');
  var category = reactLocalStorage.getObject('category');
  var maintenance = localStorage.getItem('maintenance');

  return (
    <div className="results">
      <MainImg src="logo-flat.png"/>
      <LargeTitles text={climate.value}/>
      
      <Options/>
      <Options/>
      <Options/>
      <Options/>
      <MainButton text="See how you will make a difference!"/>
    </div>
  )
}

