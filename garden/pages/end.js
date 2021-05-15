
import LargeTitles from '../comps/LargeTitles'
import MainImg from '../comps/MainImg'
import { useRouter } from 'next/router';
import Description from '../comps/DescriptiveText';
import SmallDescription from '../comps/SmallDescriptive';
import Watering from '../comps/Watering';
import { useState } from 'react';
import Logo from '../comps/Logo';
import Clouds from '../comps/Clouds';
import Menu from '../comps/HambMenu';
import MainButton from '../comps/MainButton';


export default function Home() {
  
  
    const Results = () => {

      if(process.browser){
          var results = sessionStorage.getItem("choices");
          var obj = JSON.parse(results)
          var key = obj.climate+obj.location+obj.type
  
          if(obj.climate === "Temperate" && obj.location === "Pots / Planters" && obj.type === "Vegetables / Fruits / Herbs"){
            router.push('/results/one')
          }
          if(obj.climate === "Temperate" && obj.location === "Pots / Planters" && obj.type === "Flowers / Houseplants"){
            router.push('/results/two')
          }
          if(obj.climate === "Temperate" && obj.location === "In the ground / garden" && obj.type === "Flowers / Houseplants"){
            router.push('/results/three')
          }
          if(obj.climate === "Temperate" && obj.location === "In the ground / garden" && obj.type === "Vegetables / Fruits / Herbs"){
            router.push('/results/four')
          }
          if(obj.climate === "Tropical" && obj.location === "Pots / Planters" && obj.type === "Vegetables / Fruits / Herbs"){
            router.push('/results/five')
          }
          if(obj.climate === "Tropical" && obj.location === "Pots / Planters" && obj.type === "Flowers / Houseplants"){
            router.push('/results/six')
          }
          if(obj.climate === "Tropical" && obj.location === "In the ground / garden" && obj.type === "Vegetables / Fruits / Herbs"){
            router.push('/results/seven')
          }
          if(obj.climate === "Tropical" && obj.location === "In the ground / garden" && obj.type === "Flowers / Houseplants"){
            router.push('/results/eight')
          }
          if(obj.climate === "Arid" && obj.location === "Pots / Planters" && obj.type === "Vegetables / Fruits / Herbs"){
            router.push('/results/nine')
          }
          if(obj.climate === "Arid" && obj.location === "Pots / Planters" && obj.type === "Flowers / Houseplants"){
            router.push('/results/ten')
          }
          if(obj.climate === "Arid" && obj.location === "In the ground / garden" && obj.type === "Flowers / Houseplants"){
            router.push('/results/eleven')
          }
          if(obj.climate === "Arid" && obj.location === "In the ground / garden" && obj.type === "Vegetables / Fruits / Herbs"){
            router.push('/results/twelve')
          }
      }
    }


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
          <Menu/>
          <div className="content">
  
            <LargeTitles text="Congratulations!"/>
            <Description text="You've started on your plant growing journey"/>
            <MainImg src="happyglobe.png"/>
            <Description text="Thanks for using garden, and don't forget to water your plants!"/>
            <MainButton text="Go home" onClick={()=>router.push('/') }/>
            <MainButton text="Retake quiz" onClick={()=>router.push('/quiz/question1') }/>
            <MainButton text="View results again" onClick={Results}/>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}