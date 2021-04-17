import Head from 'next/head'
import styled from 'styled-components'
import StatusBar from '../comps/StatusBar'
import MedTitles from '../comps/MediumTitles'
import PlantDetailsLarge from '../comps/PlantDetailsLarge'
// import PercentComplete from '../comps/PercentComplete'

export default function Home() {
  return (
    <div>
      <StatusBar percent="25%" width="30%"/>
      <MedTitles text="Calculating your results.." />
      <PlantDetailsLarge src="../../public/sun.png"/>
    </div>
  )
}
