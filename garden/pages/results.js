import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MainButton from '../comps/MainButton';
import LargeTitles from '../comps/LargeTitles';
import MainImg from '../comps/MainImg';
import Options from '../comps/Results';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from '../comps/Logo';


const Results = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  useEffect(() => {
    if (process.browser) {
      var choices = sessionStorage.getItem("choices");
      var obj = JSON.parse(Results)
      var key = obj.climate + obj.maintenance + obj.location + obj.type
      console.log(choices)

      if (obj.climate === "Temperate" && obj.maintenance === "Low maintenance" && obj.location === "Pots / Planters" && obj.type === "Vegetables / Fruits / Herbs") {
        setTitle()
        setSrc()
        setClimate()
        setGoodIn()
        setCategory()
        setMaintenance()
        setSun()
        setWater()
        setFact()
      }
    }

})


  const router = useRouter()

  return (
    <div className="results">
      <Logo />

      <MainImg src="watermark.png" width="40%" />


      <LargeTitles text="*Name*, Garden recommends" />
      <Options />
      <Options />
      <Options />

      <div className="resultsButton" data-aos="fade-in" data-aos-duration="4000" onClick={() => router.push('/end')}><MainButton text="Finish" /></div>
    </div>
  )
}

export default Results

// no pesticides - use bee friendly natural alternatives - like the natural alternatives including chrysanthemums and lavender 
// plant a variety of plants, including herbs and flowers, to attract bees - echinacea is great during the summer
// lower intake of meat and dairy, causing reduction in biodiversity 