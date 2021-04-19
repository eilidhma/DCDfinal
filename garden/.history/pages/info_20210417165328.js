import HeroImg from '../comps/HeroImg'
import LargeTitles from '../comps/LargeTitles'
import MainImg from '../comps/MainImg'
import LandingInfo from '../comps/LandingBio'
import Description from '../comps/DescriptiveText'
import ButtonUI from '../comps/MainButton'
import { useRouter } from 'next/router';


export default function Home() {

  const router = useRouter()

  return (
    <html>
      <body>
        <div className="info">
          <LargeTitles text="Why Grow Food at Home?"/>
          <MainImg src="couple.png" width="20%"/>
          <ButtonUI text="Why Grow Food at Home" routeTo="/info" onClick={() => router.push('/info')}/>
          <ButtonUI text="What You Should Grow" routeTo="/quiz" onClick={() => router.push('/quiz')}/>
        </div>
      </body>
    </html>
  )
}