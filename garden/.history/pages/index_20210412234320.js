import Head from 'next/head'
import styled from 'styled-components'
import StatusBar from '../comps/StatusBar'
import MedTitles from '../comps/'
// import PercentComplete from '../comps/PercentComplete'

export default function Home() {
  return (
    <div>
      <StatusBar percent="25%" width="30%"/>
      <MediumTitles text="Calculating your results.." />
    </div>
  )
}
