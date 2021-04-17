import Head from 'next/head'
import styled from 'styled-components'
import StatusBar from '../comps/StatusBar'
import PercentComplete from '../comps/PercentComplete'

export default function Home() {
  return (
    <div>
      <StatusBar percent="25%"><PercentComplete width="40%"/></StatusBar>
      
    </div>
  )
}
