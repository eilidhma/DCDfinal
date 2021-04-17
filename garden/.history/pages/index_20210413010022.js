import Head from 'next/head'
import styled from 'styled-components'
import StatusBar from '../comps/StatusBar'
import MedTitles from '../comps/MediumTitles'
import PlantDetailsLarge from '../comps/PlantDetailsLarge'
import Loading from '../comps/LoadingPage'
import OptionsCard from '../comps/OptionsCard'
// import PercentComplete from '../comps/PercentComplete'

export default function Home() {
  return (
    <div>
      <StatusBar percent="25%" width="30%"/>
      <MedTitles text="Calculating your results.." />
      <Loading />
      <PlantDetailsLarge src="sun.png" text="Requires moderate sunlight"/>
      <PlantDetailsLarge src="water.png" text="Water every 3 days"/>
      <PlantDetailsLarge src="globe.png" text="Strong air purifier"/>
      <OptionsCard
    </div>
  )
}
