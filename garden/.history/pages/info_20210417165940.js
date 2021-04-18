import LargeTitles from '../comps/LargeTitles'
import MainImg from '../comps/MainImg'
import ButtonUI from '../comps/MainButton'
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Options = ({
  title="English Lavender",
  src="lavendar.png",
  text="placeholder",
  onClick=()=>{},
  climate="arid",
  goodIn="pots/planters",
  category="flowers",
  maintenance=" moderate",
  learn=" Learn more"
  }) => {

export default function Home = () {

  const router = useRouter()

  const BackgroundCont = styled.div`
    background:
  `;

  return (
    <html>
      <body>
        <div className="info" >
          <LargeTitles text="Why Grow Food at Home?"/>
          <MainImg src="couple.png" width="30%"/>
          <ButtonUI text="Sustainability" routeTo="/info" onClick={() => router.push('/info')}/>
          <ButtonUI text="Wellness Benefits" routeTo="/quiz" onClick={() => router.push('/quiz')}/>
          <ButtonUI text="Saving the Bees" routeTo="/quiz" onClick={() => router.push('/quiz')}/>
        </div>
      </body>
    </html>
  )
}