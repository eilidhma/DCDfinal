import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router'

const LoadingCont = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  margin-top:5vw;
  width:20vw;
  max-width:200px;
`;

const Spinner = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-clip: padding-box;
  width:30vw;
  max-width:200px;
  height:30vw;
  max-height:200px;
  border:5px solid rgba(255,255,255,0.2);
  border-top:5px solid rgba(255,255,255,1);
  border-right:5px solid rgba(255,255,255,1);
  border-radius: 50%;
  animation: spin 2s linear infinite;
`;

const LoadingImg = styled.img`
  display:flex;
  object-fit:contain;
  width:100%;
  max-width:150px;
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