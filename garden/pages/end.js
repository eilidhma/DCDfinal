
import LargeTitles from '../comps/LargeTitles'
import MainImg from '../comps/MainImg'
import { useRouter } from 'next/router';
import Description from '../comps/DescriptiveText';
import SmallDescription from '../comps/SmallDescriptive';
import Watering from '../comps/Watering';
import { useState } from 'react';
import Logo from '../comps/Logo';
import Clouds from '../comps/Clouds';


export default function Home() {

  const [opacitysmallstate, setOpacitySmall] = useState(false)
  const [opacitybigstate, setOpacityBig] = useState(false)
  const [waterstate, setWater] = useState(0)

  const HandleWater = () =>{
    setWater(-40)
    setOpacitySmall(!opacitysmallstate)
    setOpacityBig(!opacitybigstate)
  }

  const router = useRouter()

  return (
    <div className="garden">
      <div className="background"><Clouds/></div>
      <div className="app">
        <div className="main">
          <Logo/>
          <MainImg src="watermark.png" width="50%"/>
          <LargeTitles text="Congratulations!"/>
          <Description text="You've started on your plant growing journey"/>
          <MainImg src="happyglobe.png"/>
          <Description text="Thanks for using garden, and don't forget to water your plants!"/>
          {/* <SmallDescription text="speaking of..."/>
          <Watering 
          onClick={HandleWater}
          opacityBig = {waterstate ? 1 : 0}
          opacitySmall = {waterstate ? 0 : 1}
          rotate = {waterstate ? -40 : 0}/> */}
          <MainImg src="end.png"/>
        </div>
      </div>
    </div>
  )
}