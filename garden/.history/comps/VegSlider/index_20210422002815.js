import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const StatusBarCont = styled.div`
  display:flex;
  flex-direction: row;
  justify-content:flex-start;
  align-items:center;
  padding:20px;
  background:#FFFFFF33;
  width:70%;
`;

const


const StatusBar = ({
percent="10%",
width=10
}) => {
  return <StatusBarCont>
    <BarBackground>
      <Bar width={width}></Bar>
    </BarBackground>
    <Percent>{percent}</Percent>
  </StatusBarCont>
}

export default StatusBar;