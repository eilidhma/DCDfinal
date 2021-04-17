import Head from 'next/head'
import styled from 'styled-components'
import StatusBar from '../comps/StatusBar'
import PercentComplete from '../comps/PercentComplete'

export default function Home() {
  return (
    <div>
      <StatusBar percent="25%" width="40%">
      const StatusBar = ({
percent="10%"
}) => {
  return <StatusBarCont>
    <BarBackground>
    </BarBackground>
    <p>{percent}</p>
  </StatusBarCont>
}

export default StatusBar;
      </StatusBar>
    </div>
  )
}
