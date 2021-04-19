import { useRouter } from 'next/router';
import React, { useState } from 'react';
import MainButton from '../comps/MainButton';
import LargeTitles from '../comps/LargeTitles';
import MainImg from '../comps/MainImg';
import Options from '../comps/Results';
import Plant from '../comps/Plants';
import PlantDetailsLarge from '../comps/PlantDetailsLarge';
// import {reactLocalStorage} from 'reactjs-localstorage';
// import ls from 'local-storage'

export default function Results() {

  // var climate = reactLocalStorage.getObject('climate');
  // var goodIn = reactLocalStorage.getObject('goodIn');
  // var category = reactLocalStorage.getObject('category');
  // var maintenance = reactLocalStorage.getObject('maintenance');

  return (
    <div className="results">
      <MainImg src="logo-flat.png" />
      <LargeTitles text="Our recommendations" />

      <Options />
      <Plant />
      <PlantDetailsLarge />


      {/* <Options/>
      <Options/>
      <Options/>
      <Options/> */}
      <MainButton text="See how you will make a difference!" />
    </div>
  )
}

