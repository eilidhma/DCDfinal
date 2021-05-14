import Head from 'next/head'
import styled from 'styled-components'
import StatusBar from '../comps/StatusBar'
import MedTitles from '../comps/MediumTitles'

import Clock from '../comps/Clock'
import VegSlider from '../comps/VegSlider'
import Menu from '../comps/HambMenu'
import { render } from 'react-dom';
import Tabs from '../comps/Tabs'



export default function Home() {
  return (
    <div>
      <Tabs/>
      <StatusBar percent="25%" width="30%"/>
      <MedTitles text="Calculating your results.." />
      <Clock />
      
      <Menu color="black"/>
      <VegSlider/>
    </div>
  )
}
