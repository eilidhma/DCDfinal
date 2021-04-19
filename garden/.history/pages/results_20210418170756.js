import { useRouter } from 'next/router';
import React, {useEffect, useState} from 'react';
import MainButton from '../comps/MainButton';
import LargeTitles from '../comps/LargeTitles';
import MainImg from '../comps/MainImg';
import Options from '../comps/Results';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import {reactLocalStorage} from 'reactjs-localstorage';
// import ls from 'local-storage'
const Results = () => {
  
  useEffect(() = > {
    Aos.
  })
  // var climate = reactLocalStorage.getObject('climate');
  // var goodIn = reactLocalStorage.getObject('goodIn');
  // var category = reactLocalStorage.getObject('category');
  // var maintenance = reactLocalStorage.getObject('maintenance');

  return (
    <div className="results">
      <MainImg src="logo-flat.png"/>
      <LargeTitles text="Our recommendations"/>
      
      <Options/>
      <Options/>
      <Options/>
      <Options/>
      <div data-aos="fade-in" data-aos-duration="4000"><MainButton text="Finish"/></div>
    </div>
  )
}

