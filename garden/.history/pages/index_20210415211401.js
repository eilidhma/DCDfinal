import Head from 'next/head'
import styled from 'styled-components'
import MedTitles from '../comps/MediumTitles'
import PlantDetailsLarge from '../comps/PlantDetailsLarge'
import Loading from '../comps/LoadingPage'
import OptionsCard from '../comps/OptionsCard'
import LandingInfo from '../comps/LandingBio'
import StatusBar from '../comps/StatusBar'
import HeroImg from '../comps/HeroImg'

export default function Home() {
  return (
    <div className="main">
      <HeroImg src=""/>
      <LandingInfo titleText="Our topic for this app:" bodyText="We want to bring more awareness towards growing your own plants, vegetables and herbs to prevent more food waste and/or packaging waste caused by the sales of plants."/>
      
    </div>
  )
}