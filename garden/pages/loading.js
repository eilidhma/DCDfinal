import { useRouter } from 'next/router';
import StatusBar from '../comps/StatusBar';
import LargeTitles from '../comps/LargeTitles';
import React, {useState,useEffect} from 'react';
import Loading from '../comps/LoadingPage';
import Clouds from '../comps/Clouds';
import Back from '../comps/Back';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Quiz() {


  useEffect(() => {
    AOS.init({ duration: 2000 });
    }, []);

  useEffect(()=>{
    if(process.browser){
        var results = sessionStorage.getItem("choices");
        var obj = JSON.parse(results)
        var key = obj.climate+obj.location+obj.type

        if(obj.climate === "Temperate" && obj.location === "Pots / Planters" && obj.type === "Vegetables / Fruits / Herbs"){
          setTimeout(() => { 
              router.push('/results/one')
            }, 1000)
        }
        if(obj.climate === "Temperate" && obj.location === "Pots / Planters" && obj.type === "Flowers / Houseplants"){
          setTimeout(() => { 
              router.push('/results/two')
            }, 1000)
        }
        if(obj.climate === "Temperate" && obj.location === "In the ground / garden" && obj.type === "Flowers / Houseplants"){
          setTimeout(() => { 
              router.push('/results/three')
            }, 1000)
        }
        if(obj.climate === "Temperate" && obj.location === "In the ground / garden" && obj.type === "Vegetables / Fruits / Herbs"){
          setTimeout(() => { 
              router.push('/results/four')
            }, 1000)
        }
        if(obj.climate === "Tropical" && obj.location === "Pots / Planters" && obj.type === "Vegetables / Fruits / Herbs"){
          setTimeout(() => { 
              router.push('/results/five')
            }, 1000)
        }
        if(obj.climate === "Tropical" && obj.location === "Pots / Planters" && obj.type === "Flowers / Houseplants"){
          setTimeout(() => { 
              router.push('/results/six')
            }, 1000)
        }
        if(obj.climate === "Tropical" && obj.location === "In the ground / garden" && obj.type === "Vegetables / Fruits / Herbs"){
          setTimeout(() => { 
              router.push('/results/seven')
            }, 1000)
        }
        if(obj.climate === "Tropical" && obj.location === "In the ground / garden" && obj.type === "Flowers / Houseplants"){
          setTimeout(() => { 
              router.push('/results/eight')
            }, 1000)
        }
        if(obj.climate === "Arid" && obj.location === "Pots / Planters" && obj.type === "Vegetables / Fruits / Herbs"){
          setTimeout(() => { 
              router.push('/results/nine')
            }, 1000)
        }
        if(obj.climate === "Arid" && obj.location === "Pots / Planters" && obj.type === "Flowers / Houseplants"){
          setTimeout(() => { 
              router.push('/results/ten')
            }, 1000)
        }
        if(obj.climate === "Arid" && obj.location === "In the ground / garden" && obj.type === "Flowers / Houseplants"){
          setTimeout(() => { 
              router.push('/results/eleven')
            }, 1000)
        }
        if(obj.climate === "Arid" && obj.location === "In the ground / garden" && obj.type === "Vegetables / Fruits / Herbs"){
          setTimeout(() => { 
              router.push('/results/twelve')
            }, 1000)
        }
    }
},[])

  
  const router = useRouter()

  return (
  <div className="garden">
  <div className="background"><Clouds /></div>
  <div className="app">
    <div className="main">
    <div className="content">
      <div className="loading">
      <div className="quizWrap"><StatusBar percent="100%" width="100"/></div>
        <div className="backButton">
          <Back opacity="0"/>
        </div>
        <div data-aos="fade" className="loadingTitle">
        <LargeTitles text="Calculating your results..."/>

        </div>
            
        <Loading />
      </div>
    </div>
    </div>
  </div>
  </div>
  )
}