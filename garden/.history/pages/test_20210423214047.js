import Head from 'next/head'
import styled from 'styled-components'
import StatusBar from '../comps/StatusBar'
import MedTitles from '../comps/MediumTitles'

import Clock from '../comps/Clock'
import VegSlider from '../comps/VegSlider'
import Menu from '../comps/HambMenu'
import { render } from 'react-dom';



export default function Home() {
  return (
    <div>
      <StatusBar percent="25%" width="30%"/>
      <MedTitles text="Calculating your results.." />
      <Clock />
      <div id></div>
      <Menu color="black"/>
      <VegSlider/>
    </div>
  )
}
