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
    <div className="results">
      <MainImg src="logo-flat.png"/>
      <LargeTitles text="Our recommendations"/>
      
      <Options/>
      <Options/>
      <Options/>
      <Options/>
      <MainButton text="See how you will make a difference!"/>
    </div>
  )
}