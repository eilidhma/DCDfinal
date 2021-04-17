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
  background-color:#6AA151;
  height:25px;
  width: 70%;
  border-radius:15px;
  border:none;
`;

const Bar = styled.div`
  display:flex;
  height:25px;
  width:${props=>props.width};
  border-radius:15px;
  border:none;
  background-color:white;
`;

const Percent = styled.p`

`;


const StatusBar = ({
percent="10%",
width="10%"
}) => {
  return <StatusBarCont>
    <BarBackground>
      <Bar width={width}></Bar>
    </BarBackground>
    <p>{percent}</p>
  </StatusBarCont>
}

export default StatusBar;