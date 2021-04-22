import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const Cont = styled.div`
  display:flex;
  flex-direction: row;
  justify-content:flex-start;
  align-items:center;
  padding:20px;
  background:#FFFFFF33;
  width:70%;
`;

const ImgCont = styled.div`
  display:flex;
  width:${props=>props.width};
  max-width:500px;
  object-fit:cover;
  justify-content:center;
  align-items:center;
  text-align:left;
`;


const Img = styled.img`
  display:flex;
  width:100%;
  object-fit:cover;
`;

const Text = styled.h2`

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