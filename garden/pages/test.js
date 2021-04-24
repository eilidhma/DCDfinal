import Head from 'next/head'
import styled from 'styled-components'
import StatusBar from '../comps/StatusBar'
import MedTitles from '../comps/MediumTitles'

import Clock from '../comps/Clock'
import VegSlider from '../comps/VegSlider'



export default function Home() {
  return (
    <div>
      <StatusBar percent="25%" width="30%"/>
      <MedTitles text="Calculating your results.." />
      <Clock />
      
      <VegSlider/>
    </div>
  )
}

