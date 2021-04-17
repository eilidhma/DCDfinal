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
  const [buttonstate, setButtonState] = useState(0);

  const router = useRouter()


  return (
    <div className="quiz">
      <StatusBar percent="0%" width="5%"/>
      <MedTitles text="Question #1"/>
      <MainImg src="worldmap.png" width="80"/>
      <Question text="What climate are you living in right now?"/>
      <ButtonUI 
        text="Temperate" 
		    onClick={()=>setButtonState(1)}
        background = {buttonstate === 1 ? "#367A17" : "#FFFFFF33"}/>
      <ButtonUI 
        text="Tropical" 
        onClick={()=>setButtonState(2)}
        background = {buttonstate === 2 ? "#367A17" : "#FFFFFF33"}/>
      <ButtonUI 
        text="Arid" 
        onClick={()=>setButtonState(3)}
        background = {buttonstate === 3 ? "#367A17" : "#FFFFFF33"}/>
      <ButtonUI text="Next Question" routeTo="/quiz" onClick={() => router.push('/quiz')}/>
    </div>
  )
}