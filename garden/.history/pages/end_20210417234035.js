
import LargeTitles from '../comps/LargeTitles'
import MainImg from '../comps/MainImg'
import { useRouter } from 'next/router';
import Description from '../comps/DescriptiveText';
import SmallDescription from '../comps/SmallDescriptive';
import Watering from '../comps/Watering';


export default function Home() {

  

  const router = useRouter()

  return (
    <div className="main">
      <MainImg src="logo-flat.png"/>
      <LargeTitles text="Congratulations!"/>
      <Description text="You've started on your plant growing journey"/>
      <MainImg src="happyglobe.png"/>
      <Description text="Thanks for using garden, and don't forget to water your plants!"/>
      <SmallDescription text="speaking of..."/>
      <Watering />
      <MainImg src="end.png" opacity={opacitystate}/>
    </div>
  )
}