import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const StatusBarCont = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:flex-end;
  align-items:center;
  padding:20px;
  background-color:#367A17;
  width:100%;
  height:100px;
  color:white;
`;

const BarBackground = styled.div`
  display:flex;
  align-items:center;
  justify-content:flex-start;
  background-color:white;
  opacity:0.3;
  height:25px;
  width: 70%;
  border-radius:15px;
  border:none;
`;

const Bar = styled.span`
  display:flex;
  height:25px;
  width:25px;
  border-radius:15px;
  border:none;
  background-color:white;
  opacity:1;
`;

const StatusBar = ({
percent="10%",
width="20%"
}) => {
  return <StatusBarCont>
    <BarBackground>
      <Bar width="width"></Bar>
    </BarBackground>
    <p>{percent}</p>
  </StatusBarCont>
}

export default StatusBar;