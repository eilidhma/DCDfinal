
import LargeTitles from '../comps/LargeTitles'
import MainImg from '../comps/MainImg'
import { useRouter } from 'next/router';
import Description from '../comps/DescriptiveText';
import SmallDescription from '../comps/SmallDescriptive';
import PlantDetailsLarge from '../comps/PlantDetailsLarge';
import Watering from '../comps/Watering';
import { useState, useEffect } from 'react';
import Logo from '../comps/Logo';
import Clouds from '../comps/Clouds';
import MainButton from '../comps/MainButton';
import Earth from '../comps/Earth';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Nav from '../comps/Menu'
import {AiOutlineClose} from 'react-icons/ai';
import {HiMenu} from 'react-icons/hi'
import Open from '../comps/OpenIcon'
import Close from '../comps/CloseIcon';
import Soil from '../comps/Soil';
import Seed from '../comps/Seed';
import Leaves from '../comps/Leaves';


export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    }, []);
  
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


  const [menuopen, setMenuOpen] = useState(false)

  const OpenMenu = () => {
    setMenuOpen(!menuopen)
  }
  const CloseMenu = () => {
    setMenuOpen(!menuopen)
  }
  const [opacitysmallstate, setOpacitySmall] = useState(false)
  const [opacitybigstate, setOpacityBig] = useState(false)
  const [waterstate, setWater] = useState(0)
  const [leaves, setLeaves] = useState(false)
  const [seed, setSeed] = useState(true)

  const HandleWater = () =>{
    setWater(-40)
    setOpacitySmall(!opacitysmallstate)
    setOpacityBig(!opacitybigstate)
  }
  const Grow = () => {
    setLeaves(true)
    setSeed(false)
  }

  const router = useRouter()

  return (
    <div className="garden">
      <div className="background"><Clouds/></div>
      <div className="app">
        <div className="main">
          {menuopen === false && <Open onClick={OpenMenu} color="white"/>}
          {menuopen === true && <Close onClick={CloseMenu} color="white"/>}
          <Nav right={menuopen ? 10 : -100} opacity={menuopen ? 1 : 0}/>
          {menuopen === false && <div className="content">
  
            <div data-aos="fade" ><LargeTitles text="Congratulations!"/></div>
            <div data-aos="fade" ><Description text="You can now start your plant growing journey."/></div>
            <div data-aos="fade" ><SmallDescription text="As a prize, here's your first seed to plant. You can plant the seed by clicking on it."/></div>
            <div className="seed-plant-main">
            <div data-aos="fade" className="seed-plant">
              <div className="seed-plant-cont">
                <Leaves
                  opacity={leaves ? "1" : "0"} />
              </div>
              <div className="seed-plant-cont">
                <Soil></Soil>
              </div>
              <div className="seed-plant-cont">
                <Seed onClick={Grow}
                  top={seed ? "-120" : "0"}
                  opacity={seed ? "1" : "0"} />
              </div>
            </div>
            </div>
            <div data-aos="fade" ><SmallDescription text="With your new plants, it means that you are helping in three different ways:"/></div>
            <div data-aos="fade" className="BlankBox">
              <PlantDetailsLarge src="planet-earth.svg" text="You are more sustainable by not producing food waste." />
              <PlantDetailsLarge src="dumbbell.svg" text="You are healthier, both physically and mentally." />
              <PlantDetailsLarge src="bee-icon.svg" text="You are helping with the mission to save the bees." />
            </div>
            <div className="endGlobe"><Earth/></div>
            <Description text="Thank you for using Garden, and don't forget to water your new plants!"/>
            <div className="endNav">
              <MainButton text="Go home" onClick={()=>router.push('/') }/>
              <MainButton text="Retake quiz" onClick={()=>router.push('/quiz/question1') }/>
              <MainButton text="View results again" onClick={Results}/>
            </div>
            
            
            
          </div>}
          
          
        </div>
      </div>
    </div>
  )
}