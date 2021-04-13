import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const MedTitles = styled.h1`
  display:flex;
  flex-direction: column;
  justify-content:flex-end;
  align-items:center;
  color:#367A17;
  -webkit-text-stroke-width:1px;
  -webkit-text-stroke-color: ${stroke};
  text-shadow: 2px 2px 2px #367A1;
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