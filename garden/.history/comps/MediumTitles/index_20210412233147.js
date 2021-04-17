import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const MedTitles = styled.div`
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
  font-size: 20px;
`;


const StatusBar = ({
percent="10%",
width="10%"
}) => {
  return <StatusBarCont>
    <BarBackground>
      <Bar width={width}></Bar>
    </BarBackground>
    <Percent>{percent}</Percent>
  </StatusBarCont>
}

export default StatusBar;



// function titleUI(color="black", stroke="red", title="insert phrase", shadowColor="black") {
//   return `
//   <h1 style="
//   font-size: 46px;
//   font-family: 'Permanent Marker', cursive;
//   color: ${color};
//   -webkit-text-stroke-width: 1px;
//   -webkit-text-stroke-color: ${stroke};
//   text-shadow: 2px 2px 2px ${shadowColor};
//   ">${title}</h1>
// `
// }