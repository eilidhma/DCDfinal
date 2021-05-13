import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const LoadingCont = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-top:5vw;
`;

const Spinner = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-clip: padding-box;
  width:30vw;
  height:30vw;
  border:5px solid rgba(255,255,255,0.2);
  border-top:5px solid rgba(255,255,255,1);
  border-right:5px solid rgba(255,255,255,1);
  border-radius: 50%;
  animation: spin 2s linear infinite;
`;

const LoadingImg = styled.img`
  display:flex;
  object-fit:contain;
  width:20vw;
  position:relative;
  bottom: 50%;
`;


const Loading = ({}) => {
  return <LoadingCont>
    <Spinner></Spinner>
    <LoadingImg src="logo-hands.png"></LoadingImg>
  </LoadingCont>
}

export default Loading;