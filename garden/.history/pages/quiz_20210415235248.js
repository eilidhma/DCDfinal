import HeroImg from '../comps/HeroImg'
import LargeTitles from '../comps/LargeTitles'
import MainImg from '../comps/MainImg'
import ButtonUI from '../comps/MainButton'
import { useRouter } from 'next/router';
import StatusBar from '../comps/StatusBar'
import MedTitles from '../comps/MediumTitles'
import Question from '../comps/Questions'


export default function Quiz() {
  const [buttonstate, setButtonState] = useState(false);

  const router = useRouter()

  const HandleClick = () =>{
    setButtonState(!heightstate)
  }

  return (
    <div className="quiz">
      <StatusBar percent="0%" width="5%"/>
      <MedTitles text="Question #1"/>
      <MainImg src="worldmap.png" width="80"/>
      <Question text="*name*, what climate are you living in right now?"/>
      <ButtonUI 
        text="Temperate" 
        onClick={HandleClick} 
        height = {heightstate ? 200 : 150}/>
      <ButtonUI 
        text="Tropical" onClick={HandleClick}/>
      <ButtonUI text="Arid" onClick={HandleClick}/>
      <ButtonUI text="What You Should Grow" routeTo="/quiz" onClick={() => router.push('/quiz')}/>
    </div>
  )
}