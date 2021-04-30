import { useRouter } from 'next/router';
import StatusBar from '../comps/StatusBar'
import MedTitles from '../comps/MediumTitles'
import React, {useState,useEffect} from 'react';
import Loading from '../comps/LoadingPage';


export default function Quiz() {

  useEffect(()=>{
    if(process.browser){
        var results = sessionStorage.getItem("choices");
        var obj = JSON.parse(results)
        var key = obj.climate+obj.location+obj.type

        if(obj.climate === "Temperate" && obj.location === "Pots / Planters" && obj.type === "Vegetables / Fruits / Herbs"){
          setTimeout(() => { 
              router.push('/resultsTEST/one')
            }, 3000)
        }
        if(obj.climate === "Temperate" && obj.location === "Pots / Planters" && obj.type === "Flowers / Houseplants"){
          setTimeout(() => { 
              router.push('/resultsTEST/two')
            }, 3000)
        }
        if(obj.climate === "Temperate" && obj.location === "In the ground / garden" && obj.type === "Flowers / Houseplants"){
          setTimeout(() => { 
              router.push('/resultsTEST/three')
            }, 3000)
        }
        if(obj.climate === "Temperate" && obj.location === "In the ground / garden" && obj.type === "Vegetables / Fruits / Herbs"){
          setTimeout(() => { 
              router.push('/resultsTEST/four')
            }, 3000)
        }
        if(obj.climate === "Tropical" && obj.location === "Pots / Planters" && obj.type === "Vegetables / Fruits / Herbs"){
          setTimeout(() => { 
              router.push('/resultsTEST/five')
            }, 3000)
        }
        if(obj.climate === "Tropical" && obj.location === "Pots / Planters" && obj.type === "Flowers / Houseplants"){
          setTimeout(() => { 
              router.push('/resultsTEST/six')
            }, 3000)
        }
        if(obj.climate === "Tropical" && obj.location === "In the ground / garden" && obj.type === "Vegetables / Fruits / Herbs"){
          setTimeout(() => { 
              router.push('/resultsTEST/seven')
            }, 3000)
        }
        if(obj.climate === "Tropical" && obj.location === "In the ground / garden" && obj.type === "Flowers / Houseplants"){
          setTimeout(() => { 
              router.push('/resultsTEST/eight')
            }, 3000)
        }
        if(obj.climate === "Arid" && obj.location === "Pots / Planters" && obj.type === "Vegetables / Fruits / Herbs"){
          setTimeout(() => { 
              router.push('/resultsTEST/nine')
            }, 3000)
        }
        if(obj.climate === "Arid" && obj.location === "Pots / Planters" && obj.type === "Flowers / Houseplants"){
          setTimeout(() => { 
              router.push('/resultsTEST/ten')
            }, 3000)
        }
        if(obj.climate === "Arid" && obj.location === "In the ground / garden" && obj.type === "Flowers / Houseplants"){
          setTimeout(() => { 
              router.push('/resultsTEST/eleven')
            }, 3000)
        }
        if(obj.climate === "Arid" && obj.location === "In the ground / garden" && obj.type === "Vegetables / Fruits / Herbs"){
          setTimeout(() => { 
              router.push('/resultsTEST/twelve')
            }, 3000)
        }
    }
},[])

  
  const router = useRouter()

  return (
        <div className="loading">
          <StatusBar percent="100%" width="100"/>
          <MedTitles text="Calculating your results..."/>
          <Loading />
        </div>
    
  )
}