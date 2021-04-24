import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const StatusBarCont = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:flex-end;
  align-items:center;
  padding-top:20px;
  background-color:#367A17;
  width:100%;
  height:100px;
  color:white;
`;


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