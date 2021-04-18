import LargeTitles from '../comps/LargeTitles'
import MainImg from '../comps/MainImg'
import ButtonUI from '../comps/MainButton'
import { useRouter } from 'next/router';
import styled from 'styled-components';


export default function Home() {

  const router = useRouter()

  const []

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