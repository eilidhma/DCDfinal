import Head from 'next/head'
import styled from 'styled-components'
import MedTitles from '../comps/MediumTitles'
import PlantDetailsLarge from '../comps/PlantDetailsLarge'
import Loading from '../comps/LoadingPage'
import OptionsCard from '../comps/OptionsCard'
import LandingInfo from '../comps/LandingBio'
// import PercentComplete from '../comps/PercentComplete'

export default function Home() {
  return (
    <div>

      
      <StatusBar percent="25%" width="30%"/>
      <MedTitles text="Calculating your results.." />
      <MedTitles text="Question #1" />
      <Loading />
      <LandingInfo titleText="Our topic for this app:" bodyText="We want to bring more awareness towards growing your own plants, vegetables and herbs to prevent more food waste and/or packaging waste caused by the sales of plants."/>
      <PlantDetailsLarge src="sun.png" text="Requires moderate sunlight"/>
      <PlantDetailsLarge src="water.png" text="Water every 3 days"/>
      <PlantDetailsLarge src="globe.png" text="Strong air purifier"/>
      <OptionsCard />
    </div>
  )
}