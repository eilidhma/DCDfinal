import HeroImg from '../comps/HeroImg'
import LargeTitles from '../comps/LargeTitles'
import MainImg from '../comps/MainImg'
import ButtonUI from '../comps/MainButton'
import { useRouter } from 'next/router';
import StatusBar from '../comps/StatusBar'
import MedTitles from '../comps/MediumTitles'
import Question from '../comps/Questions'
import React, {useState} from 'react';


export default function Quiz() {
  const [buttonstate, setButtonState] = useState(false);

  const router = useRouter()

  const HandleClick = () =>{
    setButtonState(!buttonstate)
  }
  if()

  return (
    <div className="quiz">
      <StatusBar percent="0%" width="5%"/>
      <MedTitles text="Question #1"/>
      <MainImg src="worldmap.png" width="80"/>
      <Question text="What climate are you living in right now?"/>
      <ButtonUI 
        text="Temperate" 
        onClick={HandleClick} />
      <ButtonUI 
        text="Tropical" 
        onClick={HandleClick}/>
      <ButtonUI 
        text="Arid" 
        onClick={HandleClick}/>
      <ButtonUI text="Next Question" routeTo="/quiz" onClick={() => router.push('/quiz')}/>
    </div>
  )
}