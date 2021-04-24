import { useRouter } from 'next/router';
import React, {useEffect, useState} from 'react';
import MainButton from '../comps/MainButton';
import LargeTitles from '../comps/LargeTitles';
import MainImg from '../comps/MainImg';
import Options from '../comps/Results';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PlantCatalogue from '../data/plants';
// import {reactLocalStorage} from 'reactjs-localstorage';
// import ls from 'local-storage'


const Results = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  // var climate = reactLocalStorage.getObject('climate');
  // var goodIn = reactLocalStorage.getObject('goodIn');
  // var category = reactLocalStorage.getObject('category');
  // var maintenance = reactLocalStorage.getObject('maintenance');
  const router = useRouter()
  return (
    <div className="results">
      <MainImg src="logo-flat.png"/>
      <LargeTitles text="Our recommendations"/>

      <Options/>
      <Options/>
      <Options/>
      <Options/>
      <div className="resultsButton" data-aos="fade-in" data-aos-duration="4000" onClick={() => router.push('/end')}><MainButton text="Finish" /></div>
    </div>
  )
}

export default Results